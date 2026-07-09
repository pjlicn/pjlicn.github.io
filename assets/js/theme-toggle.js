(function () {
  var storageKey = 'theme-preference';
  var root = document.documentElement;
  var mediaQuery = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;

  function readStoredTheme() {
    try {
      var value = localStorage.getItem(storageKey);
      return value === 'light' || value === 'dark' ? value : null;
    } catch (e) {
      return null;
    }
  }

  function writeStoredTheme(value) {
    try {
      localStorage.setItem(storageKey, value);
    } catch (e) {
      // noop
    }
  }

  function currentTheme() {
    return root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  }

  function setTheme(theme, source) {
    root.setAttribute('data-theme', theme);
    root.style.colorScheme = theme;

    if (source === 'user') {
      root.setAttribute('data-theme-source', 'user');
    } else {
      root.removeAttribute('data-theme-source');
    }

    updateToggleButton(theme);
  }

  function preferredSystemTheme() {
    return mediaQuery && mediaQuery.matches ? 'dark' : 'light';
  }

  function updateToggleButton(theme) {
    var isDark = theme === 'dark';
    var toggle = document.querySelector('.js-theme-toggle');

    if (!toggle) {
      return;
    }

    var icon = toggle.querySelector('.theme-toggle__icon');
    var label = toggle.querySelector('.theme-toggle__label');

    toggle.setAttribute('aria-pressed', isDark ? 'true' : 'false');
    toggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');

    if (icon) {
      icon.textContent = isDark ? '🌙' : '☀️';
    }

    if (label) {
      label.textContent = isDark ? 'Dark' : 'Light';
    }
  }

  function initializeToggle() {
    var toggle = document.querySelector('.js-theme-toggle');

    if (!toggle) {
      return;
    }

    updateToggleButton(currentTheme());

    toggle.addEventListener('click', function () {
      var nextTheme = currentTheme() === 'dark' ? 'light' : 'dark';
      writeStoredTheme(nextTheme);
      setTheme(nextTheme, 'user');
    });
  }

  if (mediaQuery) {
    var onSystemThemeChange = function () {
      if (!readStoredTheme()) {
        setTheme(preferredSystemTheme(), 'system');
      }
    };

    if (typeof mediaQuery.addEventListener === 'function') {
      mediaQuery.addEventListener('change', onSystemThemeChange);
    } else if (typeof mediaQuery.addListener === 'function') {
      mediaQuery.addListener(onSystemThemeChange);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeToggle);
  } else {
    initializeToggle();
  }
})();
