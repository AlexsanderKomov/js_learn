document.addEventListener('DOMContentLoaded', function () {
  let timerStart = document.querySelector('.timer__start');
  let timerInput = document.querySelector('.timer__input');
  let timerCurrent = document.querySelector('.timer__current');
  let interval;

  timerStart.addEventListener('click', function () {
    clearInterval(interval);
    interval = setInterval(timerWork, 1000);

    timerCurrent.textContent = timerInput.value;
  });

  function timerWork() {
    let countSeconds = parseInt(timerCurrent.textContent);
    if (countSeconds > 0) {
      countSeconds -= 1;
    }

    return (timerCurrent.textContent = countSeconds);
  }
});
