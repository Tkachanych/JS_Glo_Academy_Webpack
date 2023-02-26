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

  const clearString = (str) => {
    return str.replace(/^[\s\-]+/g, '')
      .replace(/[\s\-]+$/g, '')
      .replace(/[\-]{2,}/g, '-')
      .replace(/[\s]{2,}/g, ' ');
  }

  calcItems.forEach((item) => {
    if (!/calc-type/.test(item.className)) {
      item.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/\D+/g, '');
      })
    }
  })

  names.forEach((item) => {
    item.addEventListener('blur', (e) => {
      e.target.value = e.target.value.replace(textRegex, '')
      e.target.value = clearString(e.target.value);
      e.target.value = e.target.value.replace(/([\bа-яё]+)/gi, (letter =>
        letter[0].toLocaleUpperCase() + letter.substring(1).toLocaleLowerCase()
      ));
    })
  });

  message.addEventListener('blur', (e) => {
    e.target.value = e.target.value.replace(textRegex, '');
    e.target.value = clearString(e.target.value);
  })

  emails.forEach((item) => {
    item.addEventListener('blur', (e) => {
      e.target.value = e.target.value.replace(emailRegex, '');
      e.target.value = clearString(e.target.value);
    })
  });

  phones.forEach((item) => {
    item.addEventListener('blur', (e) => {
      e.target.value = e.target.value.replace(phoneRegex, '');
      e.target.value = clearString(e.target.value);
    })
  });

  document.getElementById('form2-name').classList.remove('form-name');
}

export default calc;