const getWeekDay = (date) => {

  const curDay = (6 + date.getDay()) % 7;

  const daysOfWeekRus = [
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
    'Воскресенье'
  ];

  return daysOfWeekRus[curDay];

}
export default getWeekDay;