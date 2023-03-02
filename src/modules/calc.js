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
      && (total.textContent = Math.round(totalValue));
  };

  calcBlock.addEventListener('change', (e) => {
    if (e.target === calcType
      || e.target === calcSquare
      || e.target === calcCount
      || e.target === calcDay) {
      countCalc();
    }
  });
};

export default calc;
