
//js variable
const a = document.querySelector(".btn");
const b = document.querySelector(".number");

//button event 
a.addEventListener("click", function () {
  b.textContent = getRandomNumber();
});

//random function generator 
function getRandomNumber() {
  return Math.floor(Math.random() * 11);
}


