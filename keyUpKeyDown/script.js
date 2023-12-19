let inc = document.getElementById("inc");
let dec = document.getElementById("dec");
let reset = document.getElementById("reset");
let result = document.getElementById("result");
let a = 0;

//initially
result.textContent = "0";

function increment() {
  result.innerText = ++a;
}
function decrement() {
  result.innerText = --a;
}
function reseter() {
  a = 0;
  result.innerText = a;
}
//FOR KEYBOARD BUTTONS
document.addEventListener("keyup", function (event) {
  if (event.key === "ArrowUp") {
    increment();
  } else if (event.key === "ArrowDown") {
    decrement();
  } else if (event.key === "r" || event.key === "R") {
    reseter();
  }
});
//fOR SCREEN BUTTONS
inc.addEventListener("click", increment);
dec.addEventListener("click", decrement);
reset.addEventListener("click", reseter);
