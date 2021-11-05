const mybutton = document.getElementById("mybutton");
mybutton.addEventListener("click", function() { alert("button clicked") });

const toggleBackground = document.querySelector(".blue-background");

const togglebutton = document.getElementById("backgroundButton");
togglebutton.addEventListener("click", function() { toggleBackground.classList.toggle("red-background") });

// Opdracht 2
// const changebutton = document.getElementById("backgroundButton");
// changebutton.addEventListener("click", function() { changeBackground.classList.add("red-background") });