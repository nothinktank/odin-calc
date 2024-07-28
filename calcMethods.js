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

let display = document.querySelector(".display")

let firstNumber = document.querySelector("#seven")
let calcOp 
let secondNumber

firstNumber.addEventListener("click", () => {
  console.log('a button is clicked')
  display.textContent = firstNumber.textContent;
})