document.getElementById("begin").addEventListener("click", start);

function start() {
  document.body.style.backgroundColor = "rgb(206 38 54)";
  const element = document.getElementById("mainTitle");
  element.remove();
  setTimeout(backgroundColour, Math.random() * 10000);

  function backgroundColour() {
    document.body.style.backgroundColor = "rgb(75, 219, 106)";
  }

  document.body.addEventListener("click", clickedBody);

  function clickedBody() {
    if (document.body.style.background === "rgb(75, 219, 106)") {
      console.log("green");
    } else if ((document.body.style.backgroundColor = "rgb(206 38 54)")) {
      console.log("Red");
    }
  }
}
