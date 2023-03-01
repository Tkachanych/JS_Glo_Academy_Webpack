const toggleMenu = () => {
  const menu = document.querySelector('menu');
  const { body } = document;

  const handleMenu = () => {
    menu.classList.toggle('active-menu');
  };

  const scrollToElem = (id) => {
    document.getElementById(id)?.scrollIntoView({ block: 'start', behavior: 'smooth' });
  };

  body.addEventListener('click', (e) => {
    const { target } = e;
    const isOpen = menu.classList.contains('active-menu');
    const id = target.closest('[href="#service-block"], menu a')?.getAttribute('href').slice(1);

    id && e.preventDefault();
    (id && id !== 'close') && scrollToElem(id);
    (target.closest('.menu') || (isOpen && (id || target !== menu))) && handleMenu();
  });
};

export default toggleMenu;
