const toggleMenu = () => {
  const menu = document.querySelector('menu');
  const body = document.querySelector('body');
  const scrollBtn = body.querySelector('a');

  const handleMenu = () => {
    menu.classList.toggle('active-menu');
  };

  body.addEventListener('click', (e) => {
    if (e.target.parentNode === scrollBtn) {
      e.preventDefault();
      document.querySelector(e.target.parentNode.getAttribute('href'))
        .scrollIntoView({ block: 'start', behavior: 'smooth' });
    }
    if (e.target.closest('.active-menu')
    && !e.target.classList.contains('active-menu')) {
      e.preventDefault();
      handleMenu();
      document.querySelector(e.target.getAttribute('href'))
        .scrollIntoView({ block: 'start', behavior: 'smooth' });
      return;
    }
    if ((e.target.closest('.menu') && !e.target.closest('.active-menu'))
      || e.target.classList.contains('close-btn')
      || (e.target !== menu && menu.classList.contains('active-menu'))) {
      handleMenu();
    }
  });
};

export default toggleMenu;
