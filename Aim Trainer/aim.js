window.addEventListener("load", draw);

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

// Drawing and stuff

let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");

cnv.width = 800;
cnv.height = 500;

function draw() {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, cnv.width, cnv.height);

  ctx.fillStyle = "cyan";
  ctx.beginPath();
  ctx.arc(element.x, element.y, element.r, 0, 2 * Math.PI);
  ctx.fill();
  requestAnimationFrame(draw);
}

//
//
//
// Teleporting Circle

let element = {
  x: 400,
  y: 400,
  r: 25,
};

let mouseX;
let mouseY;
let clicks = 0;

// Event Listeners & Handlers
document.addEventListener("click", mouseclickHandler);

function mouseclickHandler(event) {
  result = 0;
  // Get rectangle info about canvas location
  let cnvRect = cnv.getBoundingClientRect();

  // Calc mouse coordinates using mouse event and canvas location info
  mouseX = Math.round(event.clientX - cnvRect.left);
  mouseY = Math.round(event.clientY - cnvRect.top);

  let circleDistance = Math.sqrt(
    (element.x - mouseX) ** 2 + (element.y - mouseY) ** 2
  );

  if (circleDistance <= element.r) {
    let randX = Math.random() * (cnv.width - 100);
    element.x = randX + 50;
    let randY = Math.random() * (cnv.height - 100);
    element.y = randY + 50;
    start();
    clicks++;
    if (clicks === 10) {
      cnv.remove();
      const timeDisplay = document.getElementById("time");
      timeDisplay.remove();
      clearInterval(Interval);
      document.getElementById("finalTime").innerHTML = `${seconds}:${tens}`;
      let compare = (seconds + (tens/100)) - 6;
      document.getElementById("compare").innerHTML = compare;
      tens = "00";
      seconds = "00";
      appendTens.innerHTML = tens;
      appendSeconds.innerHTML = seconds;
      clicks = 0;
    }
    var result = document.getElementById("result");
    if (clicks === 10) {
      result.style.display = "block";
    } else {
      result.style.display = "none";
    }
  }
}

var seconds = 00;
var tens = 00;
var Interval;
var appendTens = document.getElementById("tens");
var appendSeconds = document.getElementById("seconds");

function start() {
  clearInterval(Interval);
  Interval = setInterval(startTimer, 10);
}

function startTimer() {
  tens++;

  if (tens <= 9) {
    appendTens.innerHTML = "0" + tens;
  }

  if (tens > 9) {
    appendTens.innerHTML = tens;
  }

  if (tens > 99) {
    console.log("seconds");
    seconds++;
    appendSeconds.innerHTML = "0" + seconds;
    tens = 0;
    appendTens.innerHTML = "0" + 0;
  }

  if (seconds > 9) {
    appendSeconds.innerHTML = seconds;
  }
}
