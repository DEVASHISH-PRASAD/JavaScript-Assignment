let display = document.getElementById("display");
let btn = document.getElementById("click");
function show() {
  display.textContent = "Hello, Welcome to PW Skills :)";
  display.style.color = "red";
}
btn.addEventListener("dblclick", show);
