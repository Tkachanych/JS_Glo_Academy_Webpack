const timer = (deadline) => {

  const timerHours = document.getElementById('timer-hours');
  const timerMinutes = document.getElementById('timer-minutes');
  const timerSeconds = document.getElementById('timer-seconds');

  let timerInterval;

  const getTimeRemaining = () => {

    let dateStop = new Date(deadline).getTime();
    let dateNow = new Date().getTime();
    let timeRemaining = (dateStop - dateNow) / 1000;
    let hours = Math.floor(timeRemaining / 3600);
    let minutes = Math.floor((timeRemaining / 60) % 60);
    let seconds = Math.floor(timeRemaining % 60);

    return {
      timeRemaining,
      hours,
      minutes,
      seconds
    }
  }

  const updateClock = () => {
    let getTime = getTimeRemaining();

    if (getTime.timeRemaining < 0) {
      clearInterval(timerInterval);
      return;
    }

    timerHours.textContent = String(getTime.hours).length === 1? `0${getTime.hours}` : getTime.hours;
    timerMinutes.textContent = ('0' + getTime.minutes).slice(-2);
    timerSeconds.textContent = ('0' + getTime.seconds).slice(-2);

  }

  timerInterval = setInterval(updateClock, 1000);

}

export default timer;