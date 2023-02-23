window.onload = function () {
  var tens = 00;
  var seconds = 00;
  var displayTens = document.getElementById("tens");
  var displaySeconds = document.getElementById("seconds");
  var buttonStart = document.getElementById("start-button");
  var buttonStop = document.getElementById("stop-button");
  var buttonReset = document.getElementById("reset-button");
  var Interval;

  function startTimer() {
    tens++;

    if (tens <= 9) {
      displayTens.innerHTML = "0" + tens;
    }

    if (tens > 9) {
      displayTens.innerHTML = tens;
    }

    if (tens > 99) {
      seconds++;
      displaySeconds.innerHTML = "0" + seconds;
      tens = 0;
      displayTens.innerHTML = "0" + 0;
    }

    if (seconds > 9) {
      displaySeconds.innerHTML = seconds;
    }
  }

  buttonStart.onclick = function () {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
  };

  buttonStop.onclick = function () {
    clearInterval(Interval);
  };

  buttonReset.onclick = function () {
    clearInterval(Interval);
    tens = "00";
    seconds = "00";
    displayTens.innerHTML = tens;
    displaySeconds.innerHTML = seconds;
  };
};
