document.getElementById("begin").addEventListener("click", start);

function start() {
  const element = document.getElementById("mainTitle");
  element.remove();
  document.body.style.backgroundColor = "rgb(206 38 54)";
  setTimeout(backgroundColour, Math.random() * 10000);
}

function backgroundColour() {
  document.body.style.backgroundColor = "rgb(75, 219, 106)";
}
