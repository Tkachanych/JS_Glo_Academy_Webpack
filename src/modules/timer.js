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

  const setTime = (time) => {
    timerHours.textContent = String(time.hours).length === 1 ? `0${time.hours}` : time.hours;
    timerMinutes.textContent = ('0' + time.minutes).slice(-2);
    timerSeconds.textContent = ('0' + time.seconds).slice(-2);
  }

  const updateClock = () => {
    let getTime = getTimeRemaining();

    if (getTime.timeRemaining < 0) {
      clearInterval(timerInterval);
      return;
    }
    setTime(getTime);
  }

  updateClock();
  timerInterval = setInterval(updateClock, 1000);

}

export default timer;