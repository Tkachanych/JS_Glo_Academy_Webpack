const modal = () => {
  const buttons = document.querySelectorAll('.popup-btn');
  const modal = document.querySelector('.popup');
  const closeBtn = modal.querySelector('.popup-close');
  const modalContent = modal.querySelector('.popup-content');

  let offset = 0;
  let size = 0;
  let interval;

  const checkClientWidth = () => document.documentElement.clientWidth >= 768;

  const openModalContent = () => {
    modalContent.style.display = 'block';
    interval = requestAnimationFrame(openModalContent);

    if (size < 70 && checkClientWidth()) {
      modalContent.style.transform = `scale(${size}%)`;
      size += 5;
    } else {
      cancelAnimationFrame(interval);
      modalContent.style.transform = '';
      size = 0;
    }
  };

  const openModal = () => {
    interval = requestAnimationFrame(openModal);
    modal.style.display = 'block';
    modalContent.style.display = 'none';

    if (size < 100 && checkClientWidth()) {
      modal.style.width = `${size}%`;
      modal.style.height = `${size}%`;
      size += 5;
    } else {
      cancelAnimationFrame(interval);
      size = 0;
      modal.style.width = '';
      modal.style.height = '';
      openModalContent();
    }
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
      modal.style.display = 'none';
    }
  };

  buttons.forEach((button) => {
    button.addEventListener('click', openModal);
  });

  closeBtn.addEventListener('click', closeModal);
};

export default modal;
