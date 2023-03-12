import maskPhone from './maskphone';
import validate from './validation';

const addRules = () => {
  const calcItems = document.querySelectorAll('.calc-item');
  document.getElementById('form2-name').classList.add('form-name');

  const names = document.querySelectorAll('.form-name');
  const emails = document.querySelectorAll('.form-email');
  const message = document.querySelector('.mess');
  const phones = document.querySelectorAll('.form-phone');

  document.getElementById('form2-name').classList.remove('form-name');

  const textRegex = /[^а-яё-\s]+/gi;
  const emailRegex = /[^a-z0-9\@\_\-\.\!\~\*\']+/gi;

  const addRegex = (elem, regex) => {
    elem.addEventListener('input', (e) => {
      const arr = [];
      arr.push(e.target);
      e.target.value = e.target.value.replace(regex, '');
      validate(arr) && e.target.classList.remove('error');
    });
  };

  addRegex(message, textRegex);
  calcItems.forEach((item) => (!/calc-type/.test(item.className) && addRegex(item, /\D+/g)));
  names.forEach((item) => addRegex(item, textRegex));
  emails.forEach((item) => addRegex(item, emailRegex));
  maskPhone('.form-phone');
  phones.forEach((item) => {
    item.addEventListener('input', (e) => {
      const arr = [];
      arr.push(e.target);
      validate(arr) && e.target.classList.remove('error');
    });
  });
};
export default addRules;
