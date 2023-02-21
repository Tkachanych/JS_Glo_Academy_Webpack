const daysEnd = (curDay) => {

  const arrDays = [
    'дней',
    'день',
    'дня'
  ];

  const getEnding = function (num, array) {
    let result;
    if ([0,5,6,7,8,9].includes(num % 10) || [11,12,13,14].includes(num % 100)) result = array[0];
    else if (num % 10 === 1) result = array[1];
    else result = array[2];
    return result;
  }

  return getEnding(curDay, arrDays);

}
export default daysEnd;