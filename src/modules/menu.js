const toggleMenu = () => {
  const menu = document.querySelector('menu');
  const body = document.querySelector('body');
  const scrollBtn = body.querySelector('a');

  const handleMenu = () => {
    menu.classList.toggle('active-menu');
  };

  body.addEventListener('click', (e) => {
    console.log(e.target.closest('.active-menu'));
    console.log(e.target === menu);

    if ((e.target.closest('.menu') && !e.target.closest('.active-menu'))
      || e.target.classList.contains('close-btn')) {
      handleMenu();
      return;
    }
    if (e.target.closest('.active-menu')
      && !e.target.classList.contains('active-menu')) {
      e.preventDefault();
      handleMenu();
      document.querySelector(e.target.getAttribute('href'))
        .scrollIntoView({ block: 'start', behavior: 'smooth' });
      return;
    }
    if (e.target.parentNode === scrollBtn) {
      e.preventDefault();
      document.querySelector(e.target.parentNode.getAttribute('href'))
        .scrollIntoView({ block: 'start', behavior: 'smooth' });
    }
  });
};

export default toggleMenu;
