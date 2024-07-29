function add(a,b){
 return a + b
}

function subtract(a,b){
  return a - b
}

function multiply(a,b){
  return a * b
}

function divide(a,b){
  return a / b
}

let display = document.querySelector(".display");

let firstAppendage = "";
let calcOp 
let secondAppendage = "";

// firstNumber.addEventListener("click", () => {
//   console.log('a button is clicked')
//   display.textContent = firstNumber.textContent;
// })

function operand(num){
  firstAppendage += num;
  display.textContent = `${firstAppendage}`;
  
}

function operator(input){
  

}