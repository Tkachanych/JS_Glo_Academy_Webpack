const menu = () => {
  const menuBtn = document.querySelector(".menu");
  const menu = document.querySelector("menu");
  const closeBtn = menu.querySelector(".close-btn");
  const menuItems = menu.querySelectorAll("ul>li>a");
  const scrollBtn = document.body.querySelector("a")


  const handleMenu = () => {
    menu.classList.toggle("active-menu");
  };

  menuBtn.addEventListener("click", handleMenu);
  closeBtn.addEventListener("click", handleMenu);

  menuItems.forEach(menuItem => menuItem.addEventListener("click", (e) => {
    e.preventDefault();
    handleMenu();
    document.querySelector(e.target.getAttribute('href'))
      .scrollIntoView({ block: "start", behavior: "smooth" });
  }));

  scrollBtn.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(scrollBtn.getAttribute('href'))
      .scrollIntoView({ block: "start", behavior: "smooth" });
  });

}

export default menu;