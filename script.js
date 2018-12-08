var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
// var randomColorGenerator = document.querySelector(".randomColor");


function setGradient() {
    body.style.background = 
    "linear-gradient(to right, " 
    + color1.value 
    + ", " 
    + color2.value 
    + ")";

    css.textContent = body.style.background + ";";
}
color1.addEventListener("input", setGradient());
color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient());
color2.addEventListener("input", setGradient);


// randomColorGenerator.addEventListener("click", randomColor);


// function randomColor() {
//   randomColor1 = (Math.floor((Math.random() * 255) + 1) + "," 
//   + Math.floor((Math.random() * 10) + 1) + "," 
//   + Math.floor((Math.random() * 10) + 1));

//   randomColor2 = (Math.floor((Math.random() * 255) + 1) + "," 
//   + Math.floor((Math.random() * 10) + 1) + ","
//   + Math.floor((Math.random() * 10) + 1));

//   body.style.background = 
//   "linear-gradient(to right, " 
//   + randomColor1 
//   + ", " 
//   + randomColor2 
//   + ")";

//   css.textContent = body.style.background + ";";
// }

