import getDayEnd from './wordEnd';

const greetings = () => {

  const greet = document.createElement('div');
  const currentDay = document.createElement('div');
  const currentTime = document.createElement('div');
  const daysBeforeNewYear = document.createElement('div');

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

  const arrDays = [
    'дней',
    'день',
    'дня'
  ];

  const updateTime = () => {
    const date = new Date();
    const nextYear = new Date(date.getFullYear() + 1, 0, 1);
    const curDay = date.toLocaleDateString('ru-RU', { weekday: 'long' });
    const daysUntilNextYear = Math.floor((nextYear.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));

    greet.innerText = hello(date.getHours());
    currentDay.innerText = 'Сегодня: ' + curDay[0].toLocaleUpperCase() + curDay.slice(1);
    currentTime.innerText = 'Текущее время: ' + date.toLocaleTimeString('en');
    daysBeforeNewYear.innerText = 'До нового года осталось '
      + daysUntilNextYear + ' ' + getDayEnd(daysUntilNextYear, arrDays);
  }
  
  document.body.append(greet);
  document.body.append(currentDay);
  document.body.append(currentTime);
  document.body.append(daysBeforeNewYear);

  updateTime();
  setInterval(updateTime, 1000);
}

export default greetings;