// holds the numbers
let numArray = [];

// selecting the display
let display = document.querySelector(".display");

// selecting all the buttons with num class
let numbers = document.querySelectorAll(".num");

// selecting all the buttons with operate class
let operate = document.querySelectorAll(".operate");

// function that updates the display
/* let updateDisplay = ()=>{
 *   //display.textContent = this.textContent;
 *   console.log("this works")
}*/


// attaching event listeners to buttons
numbers.forEach(
  (button) => button.addEventListener('click', function (e) { 
    numArray.push(e.target.textContent)
    display.textContent += e.target.textContent
    console.log(numArray)}));

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

// Now I can console.log the event target's textContent. Now I need to push.

/* There might be something wrong with it, but with this I can push now push the numbers to the array. 
 * Whether I can update it or not is another question.*/