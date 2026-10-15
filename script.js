(() => {
  const button = document.querySelector('.menu-button');
  const nav = document.querySelector('#navigation');
  if (button && nav) {
    button.addEventListener('click', () => {
      const isOpen = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', String(!isOpen));
      nav.classList.toggle('is-open', !isOpen);
    });
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        button.setAttribute('aria-expanded', 'false');
        nav.classList.remove('is-open');
      });
    });
  }
  const year = document.querySelector('#year');
  if (year) year.textContent = String(new Date().getFullYear());
})();