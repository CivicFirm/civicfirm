/* ────────────────────────────────────────────────────────────────────
   CivicFirm Dashboard — PIN gate.
   Cloned from NationKit vault-gate.js.
   ────────────────────────────────────────────────────────────────── */
(function () {
  'use strict';

  var KEY = 'cf_dashboard_unlocked';
  var PASSWORDS = ['3243'];

  function isUnlocked() {
    try { return localStorage.getItem(KEY) === 'true'; }
    catch (e) { return false; }
  }

  function setUnlocked() {
    try {
      localStorage.setItem(KEY, 'true');
    } catch (e) {}
  }

  function paintGate() {
    if (document.querySelector('.vault-gate-overlay')) return;

    document.documentElement.classList.add('vault-gate-on');

    var overlay = document.createElement('div');
    overlay.className = 'vault-gate-overlay';
    overlay.innerHTML =
      '<div class="vault-gate-card">' +
      '  <div class="vault-gate-mark">C</div>' +
      '  <h1 class="vault-gate-title">Civic Firm</h1>' +
      '  <p class="vault-gate-sub">Enter your access PIN to continue.</p>' +
      '  <form class="vault-gate-form" autocomplete="off">' +
      '    <input class="vault-gate-input" type="password" inputmode="numeric" maxlength="6" placeholder="••••" autofocus />' +
      '    <button type="submit" class="vault-gate-btn">Unlock</button>' +
      '  </form>' +
      '  <div class="vault-gate-err" aria-live="polite"></div>' +
      '</div>';

    function attach() {
      document.body.appendChild(overlay);
      var form = overlay.querySelector('form');
      var input = overlay.querySelector('input');
      var err = overlay.querySelector('.vault-gate-err');
      form.addEventListener('submit', function (ev) {
        ev.preventDefault();
        var v = (input.value || '').trim();
        if (PASSWORDS.indexOf(v) !== -1) {
          setUnlocked();
          document.documentElement.classList.remove('vault-gate-on');
          overlay.remove();
        } else {
          err.textContent = 'Wrong PIN. Try again.';
          input.value = '';
          input.focus();
          overlay.querySelector('.vault-gate-card').classList.add('shake');
          setTimeout(function () {
            overlay.querySelector('.vault-gate-card') &&
              overlay.querySelector('.vault-gate-card').classList.remove('shake');
          }, 350);
        }
      });
      setTimeout(function () { input.focus(); }, 50);
    }

    if (document.body) attach();
    else document.addEventListener('DOMContentLoaded', attach);
  }

  if (isUnlocked()) {
    return;
  }

  document.documentElement.classList.add('vault-gate-on');
  paintGate();
})();
