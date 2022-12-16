let seconds = [10, 30, 60];
var s;

function press(sec) {
  s = sec;
  document.getElementById("time").innerText = `${sec} . 00`;
  seconds.forEach((element) => {
    document.getElementById(`${element}`).disabled = true;
  });

  document.getElementById("click").innerText = 0;
  document.getElementById("cpsp").innerText = "Check your Click Speed !";
  document.getElementById("clk").disabled = false;
  document.getElementById("clk").innerText = "Click Here to start Timer";
}

function timer() {
  ms = 0;
  var cpst = s;

  countdown = setInterval(() => {
    if (ms == 0) {
      s -= 1;
      ms = 99;
    } else {
      ms -= 1;
    }

    let sec = s < 10 ? "0" + s : s;
    let millisec = ms < 10 ? "0" + ms : ms;
    document.getElementById("time").innerHTML = `${sec} . ${millisec}`;

    if (s == 0 && ms == 0) {
      clearInterval(countdown);
      cps(cpst);
    }
  }, 10);
}

function counter() {
  let clicks = parseInt(document.getElementById("click").innerText);
  if (clicks == 0) {
    timer();
  }
  clicks += 1;
  document.getElementById("click").innerText = clicks;
  document.getElementById("clk").innerText = "Click Here!";
}

function cps(t) {
  let clicks = parseInt(document.getElementById("click").innerText);
  let cpsec = (clicks / t).toFixed(1);
  let st = `Your Speed : ${cpsec} CPS. You're a`;

  if (cpsec <= 2) {
    document.getElementById("cpsp").innerText = st + " Snail 🐌 !";
  } else if (cpsec < 4) {
    document.getElementById("cpsp").innerText = st + " Tortoise 🐢 !";
  } else if (cpsec < 7) {
    document.getElementById("cpsp").innerText = st + " Rabbit 🐇 !";
  } else if (cpsec < 9) {
    document.getElementById("cpsp").innerText = st + " Cheetah 🐆 !";
  } else {
    document.getElementById("cpsp").innerText = st + " Octopus 🐙 !";
  }

  seconds.forEach((element) => {
    document.getElementById(`${element}`).disabled = false;
  });
  document.getElementById("clk").disabled = true;
}
