let btn = document.getElementById("btn");
let display = document.getElementById("span");
let hamburger = document.querySelector(".bar");
let nav = document.querySelector(".nav-link");

btn.addEventListener("click", function () {
  const color1 = colors();
  const color2 = colors();
  const color3 = colors();

  let randomColor = `rgb(${color1}, ${color2}, ${color3})`;
  document.body.style.backgroundColor = randomColor;
  display.innerHTML = randomColor;
});

function colors() {
  return Math.floor(Math.random() * 256);
}

hamburger.addEventListener("click", function (e) {
  nav.classList.toggle("show");
});
