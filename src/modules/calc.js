const calc = () => {
  const calcItems = document.querySelectorAll('.calc-item');
  document.getElementById('form2-name').classList.add('form-name');

  const names = document.querySelectorAll('.form-name');
  const phones = document.querySelectorAll('.form-phone');
  const emails = document.querySelectorAll('.form-email');
  const message = document.querySelector('.mess');

  const textRegex = /[^а-яё-\s]+/gi;
  const phoneRegex = /[^\d\(\)\-\+]+/g;
  const emailRegex = /[^a-z0-9\@\_\-\.\!\~\*\']+/gi;

  calcItems.forEach((item) => {
    if (!/calc-type/.test(item.className)) {
      item.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/\D+/g, '');
      });
    }
  });

  names.forEach((item) => {
    item.addEventListener('input', (e) => {
      e.target.value = e.target.value.replace(textRegex, '');
    });
  });

  message.addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(textRegex, '');
  });

  emails.forEach((item) => {
    item.addEventListener('input', (e) => {
      e.target.value = e.target.value.replace(emailRegex, '');
    });
  });

  phones.forEach((item) => {
    item.addEventListener('input', (e) => {
      e.target.value = e.target.value.replace(phoneRegex, '');
    });
  });

  document.getElementById('form2-name').classList.remove('form-name');
};

export default calc;
