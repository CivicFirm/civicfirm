/* ────────────────────────────────────────────────────────────────────
   CivicFirm Dashboard — LEFT SIDEBAR.
   Cloned from NationKit vault-nav.js.

   Surfaces:
     - Dashboard
     - Pipeline
     - Proposals
     - Projects
     - Workspace   (sub: Portfolio, Vision, AI Tools)
     - Settings
   ────────────────────────────────────────────────────────────────── */
(function () {
  'use strict';

  var ICONS = {
    dashboard:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">' +
      '<rect x="3" y="3" width="7" height="7" rx="1.5"/>' +
      '<rect x="14" y="3" width="7" height="7" rx="1.5"/>' +
      '<rect x="3" y="14" width="7" height="7" rx="1.5"/>' +
      '<rect x="14" y="14" width="7" height="7" rx="1.5"/>' +
      '</svg>',
    pipeline:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">' +
      '<path d="M3 4h18l-7 8v6l-4 2v-8z"/>' +
      '</svg>',
    proposals:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">' +
      '<path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/>' +
      '<path d="M14 3v6h6"/>' +
      '<path d="M9 13h6"/>' +
      '<path d="M9 17h4"/>' +
      '</svg>',
    workspace:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">' +
      '<circle cx="12" cy="12" r="3"/>' +
      '<path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12"/>' +
      '</svg>',
    projects:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">' +
      '<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>' +
      '</svg>',
    settings:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">' +
      '<circle cx="12" cy="12" r="3"/>' +
      '<path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>' +
      '</svg>',
    sub_dot:
      '<svg viewBox="0 0 8 8" fill="currentColor"><circle cx="4" cy="4" r="2"/></svg>',
  };

  var NAV_ITEMS = [
    {
      label: 'Dashboard',
      iconKey: 'dashboard',
      href: '/dashboard',
      match: /^\/dashboard\/?$/
    },
    {
      label: 'Opportunities',
      iconKey: 'pipeline',
      href: '/dashboard/pipeline',
      match: /^\/dashboard\/(pipeline|tracker)/,
      children: [
        { label: 'RFP Pipeline', href: '/dashboard/pipeline', match: /^\/dashboard\/pipeline/ },
        { label: 'Volunteer', href: '/dashboard/volunteer', match: /^\/dashboard\/volunteer/ }
      ]
    },
    {
      label: 'Proposals',
      iconKey: 'proposals',
      href: '/dashboard/proposals',
      match: /^\/dashboard\/proposals/
    },
    {
      label: 'Projects',
      iconKey: 'projects',
      href: '/dashboard/projects',
      match: /^\/dashboard\/projects/
    },
    {
      label: 'Workspace',
      iconKey: 'workspace',
      href: '/dashboard/workspace',
      match: /^\/dashboard\/workspace/,
      children: [
        { label: 'Portfolio', href: '/dashboard/workspace/portfolio', match: /^\/dashboard\/workspace\/portfolio/ },
        { label: 'Vision', href: '/dashboard/workspace/vision', match: /^\/dashboard\/workspace\/vision/ },
        { label: 'AI Tools', href: '/dashboard/workspace/ai-tools', match: /^\/dashboard\/workspace\/ai-tools/ }
      ]
    },
    {
      label: 'Settings',
      iconKey: 'settings',
      href: '/dashboard/settings',
      match: /^\/dashboard\/settings/
    }
  ];

  var BRAND = {
    name: 'Civic Firm',
    mark: 'C',
    href: '/dashboard',
  };
  var USER = {
    initials: 'JB',
    name: 'Jason Bruce',
    role: 'Civic Firm',
  };

  function escapeHtml(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (m) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m];
    });
  }

  function renderSidebar() {
    var path = location.pathname;

    var navHtml = NAV_ITEMS.map(function (item) {
      var hasChildren = !!(item.children && item.children.length);
      var anyChildActive = hasChildren && item.children.some(function (c) {
        return c.match && c.match.test(path);
      });
      var isActive = item.match.test(path) || anyChildActive;
      var allChildrenNavigable = hasChildren && item.children.every(function (c) { return !!c.href; });
      var showChildren = isActive || allChildrenNavigable;
      var iconSvg = ICONS[item.iconKey] || '';

      var parentTag, parentAttrs;
      if (item.href) {
        parentTag = 'a';
        parentAttrs = 'href="' + escapeHtml(item.href) + '"';
      } else {
        parentTag = 'button';
        parentAttrs = 'type="button" data-nonav="1"';
      }
      var parentHtml =
        '<' + parentTag + ' class="vside-link' + (isActive ? ' is-active' : '') + (hasChildren ? ' has-children' : '') + '" ' + parentAttrs + '>' +
        '  <span class="vside-icon">' + iconSvg + '</span>' +
        '  <span class="vside-label">' + escapeHtml(item.label) + '</span>' +
        '</' + parentTag + '>';

      if (!hasChildren) return parentHtml;

      var childrenHtml = item.children.map(function (c) {
        var childActive = c.match && c.match.test(path);
        return '<a class="vside-sublink' + (childActive ? ' is-active' : '') + '" href="' + escapeHtml(c.href) + '">' +
               '<span class="vside-subdot">' + ICONS.sub_dot + '</span>' +
               '<span class="vside-sublabel">' + escapeHtml(c.label) + '</span>' +
               '</a>';
      }).join('');
      return parentHtml +
             '<div class="vside-children' + (showChildren ? ' is-open' : '') + '">' + childrenHtml + '</div>';
    }).join('');

    return '' +
      '<aside class="vside" role="navigation" aria-label="Primary navigation">' +
      '  <a class="vside-brand" href="' + escapeHtml(BRAND.href) + '">' +
      '    <span class="vside-mark">' + escapeHtml(BRAND.mark) + '</span>' +
      '    <span class="vside-name">' + escapeHtml(BRAND.name) + '</span>' +
      '  </a>' +
      '  <nav class="vside-nav">' + navHtml + '</nav>' +
      '  <div class="vside-spacer"></div>' +
      '  <a class="vside-cta" href="/dashboard/proposals">' +
      '    <span class="vside-cta-icon">' +
      '      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
      '        <path d="M12 2v6M12 16v6M2 12h6M16 12h6M5 5l4 4M15 15l4 4M5 19l4-4M15 9l4-4"/>' +
      '      </svg>' +
      '    </span>' +
      '    <span class="vside-cta-text">' +
      '      <span class="vside-cta-label">New Proposal</span>' +
      '      <span class="vside-cta-sub">Open the generator</span>' +
      '    </span>' +
      '  </a>' +
      '  <div class="vside-callout">' +
      '    <span class="vside-callout-mark">' +
      '      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 1l2.6 6.4L21 9l-5 5 1.2 7L12 17.5 6.8 21 8 14 3 9l6.4-1.6z"/></svg>' +
      '    </span>' +
      '    <div class="vside-callout-text">' +
      '      <div class="vside-callout-eyebrow">AI Match Engine</div>' +
      '      <div class="vside-callout-body">Every opportunity scored against your brand profiles.</div>' +
      '    </div>' +
      '  </div>' +
      '  <div class="vside-user">' +
      '    <span class="vside-avatar">' + escapeHtml(USER.initials) + '</span>' +
      '    <div class="vside-user-text">' +
      '      <div class="vside-user-name">' + escapeHtml(USER.name) + '</div>' +
      '      <div class="vside-user-role">' + escapeHtml(USER.role) + '</div>' +
      '    </div>' +
      '  </div>' +
      '</aside>';
  }

  function inject() {
    if (document.querySelector('aside.vside[data-vault-nav]')) return;
    if (window.self !== window.top) return;

    var wrap = document.createElement('div');
    wrap.innerHTML = renderSidebar();
    var nav = wrap.firstElementChild;
    if (!nav) return;
    nav.setAttribute('data-vault-nav', '1');

    if (document.body.firstChild) {
      document.body.insertBefore(nav, document.body.firstChild);
    } else {
      document.body.appendChild(nav);
    }
    document.body.classList.add('has-vault-nav');

    nav.addEventListener('click', function (ev) {
      var btn = ev.target.closest && ev.target.closest('[data-nonav]');
      if (btn) {
        ev.preventDefault();
        ev.stopPropagation();
        var group = btn.nextElementSibling;
        if (group && group.classList.contains('vside-children')) {
          group.classList.toggle('is-open');
        }
        return;
      }
      var link = ev.target.closest && ev.target.closest('a.vside-link, a.vside-brand, a.vside-sublink');
      if (!link) return;
      var href = link.getAttribute('href');
      if (!href) return;
      if (ev.metaKey || ev.ctrlKey || ev.shiftKey || ev.button === 1) return;
      ev.preventDefault();
      ev.stopPropagation();
      window.location.assign(href);
    }, true);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }
})();
