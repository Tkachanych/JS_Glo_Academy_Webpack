import getWeekDay from './weekDay';
import getDayEnd from './daysEnd';

const greetings = () => {

  const date = new Date();
  const nextYear = new Date(date.getFullYear() + 1, 0, 1);
  const curDay = getWeekDay(date);
  const daysUntilNextYear = Math.floor((nextYear.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));

  const hello = (hour) => {
    switch (true) {
      case (hour >= 23 || hour < 4):
        return 'Доброй ночи.';
      case (hour >= 4 && hour < 12):
        return 'Доброе утро.';
      case (hour >= 12 && hour < 17):
        return 'Добрый день.';
      case (hour >= 17 && hour < 23):
        return 'Добрый вечер.';
    }
  }

  const greet = document.createElement('div');
  const currentDay = document.createElement('div');
  const currentTime = document.createElement('div');
  const daysBeforeNewYear = document.createElement('div');

  greet.innerText = hello(date.getHours());
  currentDay.innerText = 'Сегодня: ' + curDay;
  currentTime.innerText = 'Текущее время: ' + date.toLocaleTimeString('en');
  daysBeforeNewYear.innerText = 'До нового года осталось '
    + daysUntilNextYear + ' ' + getDayEnd(daysUntilNextYear);

  document.body.append(greet);
  document.body.append(currentDay);
  document.body.append(currentTime);
  document.body.append(daysBeforeNewYear);

}

export default greetings;