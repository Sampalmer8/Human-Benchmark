document.getElementById("click").addEventListener("click", clicked);
let timer;
let run = false;
let numOfClicks = 1;

function clicked() {
  if (run === false) {
    timer = 10;
    run = true;
    const x = setInterval(function () {
      timer--;
      if (timer === 0) {
        clearInterval(x);
        document.getElementById("result").style.display = "block";
        document.getElementById("click").style.display = "none";
        document.getElementById("time").style.display = "none";
        let cps = numOfClicks / 10;
        let compare = 6.7 - cps;
        document.getElementById("compare").innerHTML =
          Math.abs(compare).toFixed(2);
        if (compare < 0) {
          document.getElementById("moreLess").innerHTML = "faster";
          document.getElementById("comment").innerHTML = "Great job!!!";
        } else {
          document.getElementById("moreLess").innerHTML = "slower";
          document.getElementById("comment").innerHTML = "You freaking suck.";
        }
        document.getElementById("cps").innerHTML = cps;
      }
    }, 1000);
  } else if (timer > 0) {
    numOfClicks++;
  }
  document.getElementById("time").innerHTML = timer;
}
