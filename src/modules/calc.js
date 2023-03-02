const calc = (price = 100) => {
  const calcBlock = document.querySelector('.calc-block');
  const calcType = calcBlock.querySelector('.calc-type');
  const calcSquare = calcBlock.querySelector('.calc-square');
  const calcCount = calcBlock.querySelector('.calc-count');
  const calcDay = calcBlock.querySelector('.calc-day');
  const total = document.getElementById('total');

  const countCalc = () => {
    const calcTypeValue = +calcType.selectedOptions[0].value;
    const calcSquareValue = +calcSquare.value;

    let totalValue = 0;
    let calcCountValue = 1;
    let calcDayValue = 1;

    calcDay.value && (calcDayValue = +calcDay.value < 5 ? 2
      : +calcDay.value < 10 ? 1.5
        : 1);

    (+calcCount.value > 1) && (calcCountValue += +calcCount.value / 10);

    (calcType.value && calcSquare.value)
      && (totalValue = price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue)
      && (total.textContent = totalValue);

  }

  calcBlock.addEventListener('change', (e) => {
    if (e.target === calcType ||
      e.target === calcSquare ||
      e.target === calcCount ||
      e.target === calcDay) {
      countCalc();
    }
  });

  const addRules = () => {
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
  }

  addRules();

};

export default calc;
