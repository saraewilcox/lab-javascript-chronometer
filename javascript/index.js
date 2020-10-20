const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');

function printTime() {
  printMinutes();
  printSeconds();
}

function printMinutes() {
  let minutes = chronometer.getMinutes();
  let minToString = chronometer.twoDigitsNumber(minutes);
  minDec.innerHTML = minToString[0];
  minUni.innerHTML = minToString[1];
}

function printSeconds() {
  let seconds = chronometer.getSeconds();
  let secToString = chronometer.twoDigitsNumber(seconds);
  secDec.innerHTML = secToString[0];
  secUni.innerHTML = secToString[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // let liTag = document.getElementById('splits');
  // let parent = document.getElementById('splits-continer');
  // parent.appendChild(liTag);
  // liTag.innerHTML = printTime();
}

function clearSplits() {
  
}

function setStopBtn() {
  btnLeft.className = 'btn stop';
  btnLeft.innerHTML = 'STOP';
}

function setSplitBtn() {
  btnRight.className = 'btn split';
  btnRight.innerHTML = 'SPLIT';
}

function setStartBtn() {
  btnLeft.className = 'btn start';
  btnLeft.innerHTML = 'START';
}

function setResetBtn() {
  btnRight.className = 'btn reset';
  btnRight.innerHTML = 'RESET';
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if (btnLeft.innerHTML === "START") {
    btnLeft.innerHTML = "STOP";
    chronometer.startClick(printTime);
    console.log(chronometer.getSeconds());
    btnLeft.setAttribute('class', 'btn stop');
  } else {
    btnLeft.innerHTML = "START";
    chronometer.stopClick();
    btnLeft.setAttribute('class', 'btn start');
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if (btnRight.innerHTML === "RESET") {
    btnRight.innerHTML = "SPLIT";
    btnRight.setAttribute('class', 'btn split');
  } else {
    btnRight.innerHTML = "RESET";
    btnRight.setAttribute('class', 'btn reset');
  }
});