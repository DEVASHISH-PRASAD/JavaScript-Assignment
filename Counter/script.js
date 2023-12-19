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
inc.addEventListener("click", increment);
dec.addEventListener("click", decrement);
reset.addEventListener("click", reseter);
