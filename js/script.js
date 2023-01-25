const leftColor = document.querySelector(".color1");
const rightColor = document.querySelector(".color2");
const body = document.querySelector("body");
const colorBox = document.querySelector(".color-box");
// Function Section
function colorChange(){
colorBox.style.background = "linear-gradient(to right,"+
leftColor.value+","+rightColor.value+")";
body.style.background = "linear-gradient(to right,"+
rightColor.value+","+leftColor.value+")";
}
leftColor.addEventListener("input", colorChange);
rightColor.addEventListener("input", colorChange);