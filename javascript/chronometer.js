class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    this.intervalId = setInterval(() => {
    //console.log(i);
    //i++;
    this.currentTime++;
    callback();
    // if (this.currentTime > 3) {
    //     this.currentTime(intervalId)
    // }
  }, 1000);
}
//let intervalID = setInterval(callback, 2000);

  getMinutes() {
    
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60;
  }
  twoDigitsNumber(value) {

      if (value < 10) {
        return `0${value}`;
      } else {
        return `${value}`;
      }
  }
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {
    return `${this.twoDigitsNumber(this.getMinutes())}`+":"+`${this.twoDigitsNumber(this.getSeconds())}`;
  }
}
