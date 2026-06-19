import { useState, useEffect } from "react";
import { LayoutDashboard, Users, FileEdit, LogOut, Lock } from "lucide-react";

const PASS = "2132";
const STORAGE_KEY = "cf-dash-auth";

function LoginGate({ onAuth }: { onAuth: () => void }) {
  const [pin, setPin] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pin === PASS) {
      localStorage.setItem(STORAGE_KEY, "1");
      onAuth();
    } else {
      setError(true);
      setPin("");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "#0f1f3d" }}>
      <form onSubmit={handleSubmit} className="w-full max-w-sm p-8 rounded-lg" style={{ backgroundColor: "#1a2e5a", border: "1px solid rgba(201,162,39,0.3)" }}>
        <div className="flex items-center justify-center mb-6">
          <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: "rgba(201,162,39,0.15)" }}>
            <Lock size={22} style={{ color: "#c9a227" }} />
          </div>
        </div>
        <h1 className="text-center text-white text-lg font-semibold tracking-wide mb-1" style={{ fontFamily: "'Inter', sans-serif" }}>Admin Access</h1>
        <p className="text-center text-sm mb-6" style={{ color: "rgba(255,255,255,0.5)" }}>Enter your PIN to continue</p>
        <input
          type="password"
          value={pin}
          onChange={(e) => { setPin(e.target.value); setError(false); }}
          placeholder="PIN"
          autoFocus
          className="w-full px-4 py-3 rounded text-sm text-white placeholder:text-white/30 outline-none focus:ring-2 transition-all"
          style={{ backgroundColor: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}
        />
        {error && <p className="text-red-400 text-xs mt-2">Incorrect PIN</p>}
        <button
          type="submit"
          className="w-full mt-4 py-3 rounded text-sm font-semibold tracking-wider uppercase transition-all hover:brightness-110"
          style={{ backgroundColor: "#c9a227", color: "#0f1f3d" }}
        >
          Sign In
        </button>
      </form>
    </div>
  );
}

const sidebarLinks = [
  { label: "Dashboard", id: "dashboard", icon: LayoutDashboard },
  { label: "Website Content", id: "content", icon: FileEdit },
  { label: "Members", id: "members", icon: Users },
];

export default function Dashboard() {
  const [authed, setAuthed] = useState(false);
  const [activeTab, setActiveTab] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY) === "1") setAuthed(true);
  }, []);

  if (!authed) return <LoginGate onAuth={() => setAuthed(true)} />;

  const handleSignOut = () => {
    localStorage.removeItem(STORAGE_KEY);
    setAuthed(false);
  };

  return (
    <div className="flex min-h-screen" style={{ fontFamily: "'Inter', -apple-system, sans-serif" }}>
      {/* Mobile header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 h-14" style={{ backgroundColor: "#1a2e5a", borderBottom: "1px solid rgba(201,162,39,0.3)" }}>
        <span className="text-white text-sm font-semibold">Civic Firm</span>
        <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-white/70 p-2">
          {sidebarOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed lg:static z-40 w-64 shrink-0 flex flex-col transition-transform duration-300 lg:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
        style={{ backgroundColor: "#1a2e5a", minHeight: "100vh", top: 0 }}
      >
        <div className="p-5" style={{ borderBottom: "1px solid rgba(201,162,39,0.3)" }}>
          <p className="text-xs tracking-[0.2em] uppercase" style={{ color: "#c9a227" }}>Admin Panel</p>
          <p className="text-sm font-semibold mt-1 text-white">Civic Firm</p>
        </div>

        <div className="px-5 py-4" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>Welcome back,</p>
          <p className="text-sm font-medium text-white mt-0.5">Reza</p>
        </div>

        <nav className="flex-1 py-4">
          {sidebarLinks.map(({ label, id, icon: Icon }) => {
            const active = activeTab === id;
            return (
              <button
                key={id}
                onClick={() => { setActiveTab(id); setSidebarOpen(false); }}
                className="flex items-center gap-3 px-5 py-3 text-sm w-full text-left transition-all duration-150"
                style={{
                  backgroundColor: active ? "rgba(201,162,39,0.15)" : "transparent",
                  color: active ? "#c9a227" : "rgba(255,255,255,0.75)",
                  borderLeft: active ? "3px solid #c9a227" : "3px solid transparent",
                }}
              >
                <Icon size={16} />
                {label}
              </button>
            );
          })}
        </nav>

        <div className="p-4" style={{ borderTop: "1px solid rgba(201,162,39,0.3)" }}>
          <button
            onClick={handleSignOut}
            className="flex items-center gap-2 w-full px-3 py-2 text-xs tracking-wider uppercase transition-colors duration-150 hover:text-[#c9a227]"
            style={{ color: "rgba(255,255,255,0.6)", background: "none", border: "none" }}
          >
            <LogOut size={14} /> Sign Out
          </button>
        </div>
      </aside>

      {/* Mobile overlay */}
      {sidebarOpen && <div className="fixed inset-0 z-30 bg-black/50 lg:hidden" onClick={() => setSidebarOpen(false)} />}

      {/* Main content */}
      <main className="flex-1 overflow-auto pt-14 lg:pt-0" style={{ backgroundColor: "#f0f5fa" }}>
        <div className="p-6 sm:p-8">
          {activeTab === "dashboard" && <DashboardView />}
          {activeTab === "content" && <PlaceholderView title="Website Content" description="Content management coming soon." />}
          {activeTab === "members" && <PlaceholderView title="Members" description="Member management coming soon." />}
        </div>
      </main>
    </div>
  );
}

function DashboardView() {
  return (
    <>
      <div className="mb-8">
        <h1 className="text-2xl font-bold" style={{ color: "#1a2e5a" }}>Dashboard</h1>
        <p className="mt-1 text-sm" style={{ color: "#555" }}>Civic Firm — Admin Overview</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl">
        {/* Pending Applications */}
        <div
          className="p-6 bg-white cursor-pointer transition-all duration-200 hover:shadow-[0_8px_24px_rgba(26,46,90,0.1)]"
          style={{ border: "1px solid #dce6ef", borderTop: "4px solid #c9a227" }}
        >
          <div className="flex items-center justify-between mb-4">
            <p className="text-xs tracking-wider uppercase" style={{ color: "#8b6420" }}>Pending Applications</p>
            <Users size={20} style={{ color: "#c9a227" }} />
          </div>
          <p className="font-bold" style={{ fontSize: "2.5rem", color: "#1a2e5a", lineHeight: 1 }}>0</p>
          <p className="mt-2 text-xs" style={{ color: "#c9a227" }}>Manage &rarr;</p>
        </div>

        {/* Content Editor */}
        <div
          className="p-6 bg-white cursor-pointer transition-all duration-200 h-full flex flex-col justify-between hover:shadow-[0_8px_24px_rgba(26,46,90,0.1)]"
          style={{ border: "1px solid #dce6ef", borderTop: "4px solid #1a2e5a" }}
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <p className="text-xs tracking-wider uppercase" style={{ color: "#8b6420" }}>Website Content</p>
              <FileEdit size={20} style={{ color: "#1a2e5a" }} />
            </div>
            <p className="font-bold text-lg" style={{ color: "#1a2e5a" }}>Edit Website</p>
            <p className="mt-2 text-sm" style={{ color: "#555" }}>
              Update text, images, team, services, and content across the entire website.
            </p>
          </div>
          <p className="mt-4 text-xs" style={{ color: "#1a2e5a" }}>Manage Content &rarr;</p>
        </div>
      </div>
    </>
  );
}

function PlaceholderView({ title, description }: { title: string; description: string }) {
  return (
    <div className="mb-8">
      <h1 className="text-2xl font-bold" style={{ color: "#1a2e5a" }}>{title}</h1>
      <p className="mt-1 text-sm" style={{ color: "#555" }}>{description}</p>
    </div>
  );
}
