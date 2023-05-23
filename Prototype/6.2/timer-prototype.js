function TimerDisplay(seconds) {
  if (typeof seconds !== 'number' || seconds < 1) {
    throw new TypeError('Кол-во секунд должно быть числом больше 1');
  }
  this.startTime = seconds;
  this.currentTime = seconds;
}

const methods = {
  start() {
    this.interval = setInterval(() => this.tick(), 1000);
  },
  pause() {
    clearInterval(this.interval);
  },
  reset() {
    this.pause();
    this.currentTime = this.startTime;
  },
  tick() {
    if (this.currentTime <= 1) {
      this.currentTime = 0;
      this.pause();
      return;
    }
    --this.currentTime;
  },
};

Object.assign(TimerDisplay.prototype, methods);

Object.defineProperty(TimerDisplay.prototype, 'currentTime', {
  set(time) {
    this._currentTime = Number(time);
    if (this.displayElement) this.displayElement.textContent = time;
  },
  get() {
    return this._currentTime;
  },
});
