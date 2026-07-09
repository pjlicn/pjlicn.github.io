(function () {
  const storageKey = 'theme-preference';
  const root = document.documentElement;
  const mediaQuery = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;

  function readStoredTheme() {
    try {
      const value = localStorage.getItem(storageKey);
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
    const isDark = theme === 'dark';
    const toggle = document.querySelector('.js-theme-toggle');

    if (!toggle) {
      return;
    }

    const icon = toggle.querySelector('.theme-toggle__icon');
    const label = toggle.querySelector('.theme-toggle__label');

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
    const toggle = document.querySelector('.js-theme-toggle');

    if (!toggle) {
      return;
    }

    updateToggleButton(currentTheme());

    toggle.addEventListener('click', function () {
      const nextTheme = currentTheme() === 'dark' ? 'light' : 'dark';
      writeStoredTheme(nextTheme);
      setTheme(nextTheme, 'user');
    });
  }

  if (mediaQuery) {
    const onSystemThemeChange = function () {
      if (!readStoredTheme()) {
        setTheme(preferredSystemTheme(), 'system');
      }
    };

    mediaQuery.addEventListener('change', onSystemThemeChange);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeToggle);
  } else {
    initializeToggle();
  }
})();
