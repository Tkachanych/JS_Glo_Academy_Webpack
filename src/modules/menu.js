const toggleMenu = () => {
  const menu = document.querySelector('menu');
  const scrollBtn = document.body.querySelector('a');
  const body = document.querySelector('body');

  const handleMenu = () => {
    menu.classList.toggle('active-menu');
  };

  body.addEventListener('click', (e) => {
    if (e.target.closest('.menu') || e.target.classList.contains('close-btn')) {
      handleMenu();
    }
    if (e.target.closest('.active-menu')) {
      e.preventDefault();
      handleMenu();
      document.querySelector(e.target.getAttribute('href'))
        .scrollIntoView({ block: 'start', behavior: 'smooth' });
    }
    if (e.target.parentNode === scrollBtn) {
      e.preventDefault();
      document.querySelector(e.target.parentNode.getAttribute('href'))
        .scrollIntoView({ block: 'start', behavior: 'smooth' });
    }
  });
};

export default toggleMenu;
