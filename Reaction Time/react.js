const buttonStart = document.getElementById("start");
const buttonStop = document.getElementById("stop");
const buttonTryAgain = document.getElementById("try-again");
const body = document.getElementsByTagName("body")[0];
const result = document.getElementById("result");
const last = document.getElementById("last");
let timeStart,
  timeEnd,
  timeCompensate,
  timerId,
  bo5,
  results = [];
let processing = false;
let average;
document.getElementById("final").style.display = "none";

function clearResults() {
  results = [];
  timerId = clearTimeout(timerId);
  result.innerHTML = "";
  buttonTryAgain.innerHTML =
    '<span onClick="clearResults()" class="clickable">&lt; Try again &gt;</span>';
  last.innerHTML = '<span class="spacer">s</span>';
  buttonTryAgain.classList.add("hidden");
  buttonStop.classList.add("hidden");
  buttonStart.classList.remove("hidden");
}

function startTimer() {
  buttonStop.style.backgroundColor = "#ce2636";
  processing = true;
  const randomPeriod = 2000 + Math.random() * 2000; // 2000 - 4000 ms
  buttonStart.classList.add("hidden");
  buttonStop.classList.remove("hidden");

  timerId = setTimeout(() => {
    timerId = false;
    buttonStop.style.backgroundColor = "#4bdb6a";
    timeStart = performance.now();
    buttonStop.click();
  }, randomPeriod);
}

function stopTimer() {
  timeEnd = performance.now();
  processing = false;
  const reactionTime = Math.round(timeEnd - timeStart - timeCompensate);
  console.log("compensated time: ", timeCompensate);

  buttonStop.style.backgroundColor = "#ce2636";
  buttonStart.classList.remove("hidden");
  buttonStop.classList.add("hidden");
  console.log(results);
  if (timerId) {
    timerId = clearTimeout(timerId);
    last.innerHTML = "too soon";
  } else {
    timerId = false;
    result.innerHTML += `<li>${reactionTime} ms</li>`;
    last.innerHTML = `${reactionTime} ms`;
    results.push(reactionTime);
  }
  if (results.length === 5) {
    last.remove();
    result.remove();
    buttonStop.remove();
    buttonStart.remove();
    buttonTryAgain.remove();
    document.getElementById("prev").remove();
    document.getElementById("home").remove();
    document.getElementById("instruc").remove();
    document.body.style.background = "#BFD7FF";
    document.getElementById("final").style.display = "block";
    let total = 0;
    for (let i = 0; i < results.length; i++) {
      total += results[i];
      if (i === 4) {
        average = total / 5;
      }
    }
    document.getElementById(
      "average"
    ).innerHTML = `Your average reaction time was ${average}ms`;
  }
}

function compensate() {
  timeCompensate = performance.now() - timeStart;
}

function getRGBstring(ms) {
  if (ms > 200) return "rgb(255, 0, 0)";
  if (ms > 150) return "rgb(255, 255, 0)";
  if (ms > 100) return "rgb(0, 255, 0)";
}

buttonStart.addEventListener("click", startTimer);
buttonStop.addEventListener("mousedown", stopTimer);
buttonStop.addEventListener("click", compensate);

document.addEventListener("keypress", (e) => {
  if (e.code === "Space") {
    if (processing) {
      stopTimer();
    } else {
      startTimer();
    }
  }
});
