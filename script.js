// selecting the display
let display = document.querySelector(".display");

// selecting all the buttons with num class
let numbers = document.querySelectorAll(".num");

let operate = document.querySelectorAll(".operate");

// function that updates the display
/* let updateDisplay = ()=>{
 *   //display.textContent = this.textContent;
 *   console.log("this works")
}*/


// attaching event listeners to buttons
numbers.forEach(
  (button) => button.addEventListener('click', (e)=> display.textContent += e.target.textContent));

operate.forEach(
  (button) => button.addEventListener('click', (e)=> display.textContent += e.target.textContent));




let operators = {
  add(a,b) {
    return a + b;
  },

  subtract(a,b) {
   return a - b;
  },

  multiple(a,b) {
   return a * b;
  },

  divide(a,b) {
   return a / b;
  },

  operate(operator,a,b) {
  return operator(a,b);
  }
}