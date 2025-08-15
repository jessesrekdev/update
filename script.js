// Wait until DOM is ready
window.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('toggleTheme');
  const sun = document.querySelector('#themeIcon .sun');
  const moon = document.querySelector('#themeIcon .moon');
  const footer = document.getElementById('footer');


  let darkMode = false;

  function applyTheme(isDark) {
    document.body.classList.toggle('dark-mode', isDark);

    if (sun && moon) {
      if (isDark) {
        sun.style.opacity = '0';
        sun.style.transform = 'scale(0.7)';
        sun.classList.remove('pulse');

        moon.style.opacity = '1';
        moon.style.transform = 'scale(1)';
        moon.classList.add('pulse');
      } else {
        sun.style.opacity = '1';
        sun.style.transform = 'scale(1)';
        sun.classList.add('pulse');

        moon.style.opacity = '0';
        moon.style.transform = 'scale(0.7)';
        moon.classList.remove('pulse');
      }
    }
  }

  // Set initial theme from localStorage or system preference
  const storedTheme = localStorage.getItem('theme');
  darkMode = storedTheme ? storedTheme === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyTheme(darkMode);

  // Toggle theme button
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      darkMode = !darkMode;
      localStorage.setItem('theme', darkMode ? 'dark' : 'light');
      applyTheme(darkMode);
    });
  }

  // "Try it" button logic
  const tryBtn = document.getElementById('try-btn');
  if (tryBtn) {
    tryBtn.addEventListener('click', () => {
      if (typeof code !== 'undefined') {
        const url = 'https://codepen.io/pen/define?data=' +
          encodeURIComponent(JSON.stringify({
            title: "Simple HTML Document Example",
            html: code,
            js: "",
            css: ""
          }));
        window.open(url, '_blank');
      } else {
        console.error('No code available to try');
      }
    });
  }
});