const modal = () => {
  const buttons = document.querySelectorAll(".popup-btn");
  const modal = document.querySelector(".popup");
  const closeBtn = modal.querySelector(".popup-close");
  const modalContent = modal.querySelector(".popup-content");

  let offset = 0;
  let interval;

  const checkClientWidth = () => {
    return document.documentElement.clientWidth >= 768
  };

  const closeModal = () => {
    interval = requestAnimationFrame(closeModal);
    offset -= 10;
    if (modalContent.getBoundingClientRect().right > 0 && checkClientWidth()) {
      modalContent.style.transform = `translateX(${offset}%)`;
    } else {
      cancelAnimationFrame(interval);
      offset = 0;
      modalContent.style.transform = '';
      modal.style.display = "none";
    }
  };

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      modal.style.display = "block";
    })
  });

  closeBtn.addEventListener("click", closeModal);

}

export default modal;