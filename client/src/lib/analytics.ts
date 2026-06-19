/**
 * Lightweight analytics event dispatcher.
 * Fires custom events on window for external analytics tools to capture.
 * Also logs to console in development for verification.
 */
export function trackEvent(action: string, label?: string, data?: Record<string, unknown>) {
  const event = { action, label, ...data, timestamp: Date.now() };

  // Fire a custom DOM event that any analytics script can listen for
  window.dispatchEvent(new CustomEvent("cf:analytics", { detail: event }));

  // Log in development
  if (import.meta.env.DEV) {
    console.log("[Analytics]", action, label ?? "", data ?? "");
  }
}
