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
let operationType = "";
let secondAppendage = "";
let numForOperation = "";
let result = 0;
let finalFirstNum;

// firstNumber.addEventListener("click", () => {
//   console.log('a button is clicked')
//   display.textContent = firstNumber.textContent;
// })

function operand(num){
  if (operationType === ""){
  firstAppendage += num;
  display.textContent = `${firstAppendage}`;
  console.log("executed")
  }else{
    secondAppendage += num
    display.textContent =  `${secondAppendage}`;
    //numForOperation = firstAppendage;
    firstAppendage = "";
    console.log(`first appended number is ${firstAppendage}`)
  }
}

function operator(input){

  if (operationType === ""){
    operationType = input;
    finalFirstNum = firstAppendage;
    console.log(`first operator ${operationType} pressed `);
  }else {
    switch (operationType){
      case "plus": 
        result = Number(finalFirstNum) + Number(secondAppendage);
        display.textContent = `${result}`;
        console.log("adding executed");
        //assign secondAppendage to finalFirstNum and clear secondAppendage
        finalFirstNum = result;
        secondAppendage = "";
        break;
      case "minus": 
        result = Number(finalFirstNum) - Number(secondAppendage);
        display.textContent = `${result}`;
        break;
      case "times": 
        result = Number(finalFirstNum) * Number(secondAppendage);
        display.textContent = `${result}`;
        break;
      case "divide": 
        result = Number(finalFirstNum) / Number(secondAppendage);
        display.textContent = `${result}`;
        break;
      case "flipSign": 
        result = -(Number(secondAppendage));
        display.textContent = `${result}`;
        break;
    }
    
  }
  
}