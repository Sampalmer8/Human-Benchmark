var i2 = 0;
var rand;
var clear;
function start() {
  rand = "";
  for (var i = 0; i <= i2; i++) {
    rand += Math.floor(Math.random() * 10 + 0);
  }
  var timeleft = 4;
  var downloadTimer = setInterval(function () {
    timeleft--;
    document.getElementById("page").textContent = rand;
    document.getElementById("countdown").textContent = timeleft;
    if (timeleft <= 0) {
      clearInterval(downloadTimer);
      document.getElementById("page").innerHTML =
        "<input type=text id=numberinput value=>";
      document.getElementById("countdown").innerHTML =
        "<button class=startbutton onclick=run() >submit</button>";
    }
  }, 750);
}
function run() {
  if (numberinput.value == rand) {
    start();
    ++i2;
  } else {
    document.getElementById("countdown").innerHTML = "GAME OVER";
  }
}
