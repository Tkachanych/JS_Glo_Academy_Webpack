const addRules = () => {
  const calcItems = document.querySelectorAll('.calc-item');
  document.getElementById('form2-name').classList.add('form-name');

  const names = document.querySelectorAll('.form-name');
  const phones = document.querySelectorAll('.form-phone');
  const emails = document.querySelectorAll('.form-email');
  const message = document.querySelector('.mess');

  document.getElementById('form2-name').classList.remove('form-name');

  const textRegex = /[^а-яё-\s]+/gi;
  const phoneRegex = /[^\d\(\)\-\+]+/g;
  const emailRegex = /[^a-z0-9\@\_\-\.\!\~\*\']+/gi;

  const addRegex = (elem, regex) => {
    elem.addEventListener('input', (e) => {
      e.target.value = e.target.value.replace(regex, '');
    });
  };

  addRegex(message, textRegex);
  calcItems.forEach((item) => (!/calc-type/.test(item.className) && addRegex(item, /\D+/g)));
  names.forEach((item) => addRegex(item, textRegex));
  emails.forEach((item) => addRegex(item, emailRegex));
  phones.forEach((item) => addRegex(item, phoneRegex));
};

export default addRules;
