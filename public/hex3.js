let color = [1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];

let btn = document.getElementById("btn");
let display = document.getElementById("span");
let hamburger = document.querySelector(".bar");
let nav = document.querySelector(".nav-link");

btn.addEventListener("click", function () {
  let randomColor = "#";
  for (let i = 0; i < 3; i++) {
    randomColor += color[colors()];
  }

  document.body.style.background = randomColor;
  display.innerText = randomColor;
});

function colors() {
  return Math.floor(Math.random() * color.length);
}

hamburger.addEventListener("click", function (e) {
  nav.classList.toggle("show");
});
