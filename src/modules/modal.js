import { animate } from './helpers';

const modal = () => {
  const buttons = document.querySelectorAll('.popup-btn');
  const modal = document.querySelector('.popup');
  const modalContent = modal.querySelector('.popup-content');

  const checkClientWidth = () => document.documentElement.clientWidth >= 768;

  const openModalContent = () => {
    modalContent.style.display = 'block';

    checkClientWidth() && animate({
      duration: 500,
      timing(timeFraction) {
        return timeFraction;
      },
      draw(progress) {
        modalContent.style.transform = `scale(${100 * progress}%)`;
      },
    });
  };

  const openModal = () => {
    modal.style.display = 'block';
    modalContent.style.display = 'none';
    checkClientWidth() && animate({
      duration: 200,
      timing(timeFraction) {
        return timeFraction;
      },
      draw(progress) {
        modal.style.width = `${100 * progress}%`;
        modal.style.height = `${100 * progress}%`;
      },
    });
    openModalContent();
  };

  const closeModal = () => {
    checkClientWidth() && animate({
      duration: 300,
      timing(timeFraction) {
        return timeFraction;
      },
      draw(progress) {
        modalContent.style.transform = `translateX(${-200 * progress}%)`;
        modal.style.width = `${100 - 100 * progress}%`;
      },
    });

    setTimeout(() => {
      modalContent.removeAttribute('style');
      modal.removeAttribute('style');
    }, checkClientWidth() ? 500 : 0);
  };

  buttons.forEach((button) => {
    button.addEventListener('click', openModal);
  });

  modal.addEventListener('click', (e) => {
    if (!e.target.closest('.popup-content')
    || e.target.classList.contains('popup-close')) {
      closeModal();
    }
  });
};

export default modal;
