// function add(a,b){
//  return a + b
// }

// function subtract(a,b){
//   return a - b
// }

// function multiply(a,b){
//   return a * b
// }

// function divide(a,b){
//   return a / b
// }

let display = document.querySelector(".display");

let firstAppendage = "";
let operationType = "";
let secondAppendage = "";
//let numForOperation = "";
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
  console.log("first number pressed")
  }else{
    secondAppendage += num
    display.textContent =  `${secondAppendage}`;
    //numForOperation = firstAppendage;
    //firstAppendage = "";
    console.log(`first appended number is ${firstAppendage}`)
  }
}

function operator(input){
  if (!firstAppendage){
    return;
  }else if (operationType === ""){
    operationType = input;
    //finalFirstNum = firstAppendage;
    console.log(`first operator ${operationType} pressed `);
  }else{
    switch (operationType){
      case 'plus': 
        result = Number(firstAppendage) + Number(secondAppendage);
        firstAppendage = result;
        operationType = input;
        display.textContent = `${result}`;
        secondAppendage = "";
        console.log("adding executed");
        break;
      case 'minus': 
        result = Number(firstAppendage) - Number(secondAppendage);
        firstAppendage = result;
        operationType = input;
        display.textContent = `${result}`;
        secondAppendage = "";
        console.log("subtracting executed");
        break;
      case 'times': 
        result = Number(firstAppendage) * Number(secondAppendage);
        firstAppendage = result;
        operationType = input;
        display.textContent = `${result}`;
        secondAppendage = "";
        console.log("multiplying executed");
        break;
      case 'divide': 
        result = Number(firstAppendage) / Number(secondAppendage);
        firstAppendage = result;
        operationType = input;
        display.textContent = `${result}`;
        secondAppendage = "";
        console.log("dividing executed");
        break;
      case "flipSign": 
        result = -( Number(secondAppendage)? Number(secondAppendage):Number(firstAppendage) );
        //firstAppendage = result;
        display.textContent = `${result}`;
        secondAppendage = result;
        //secondAppendage = "";
        break;
    
    }

  }
}


function allclear(){
  firstAppendage = "";
  operationType = "";
  secondAppendage = "";
  result = 0;
  //finalFirstNum = ""; 
  display.textContent = "0";
  console.log("ac pressed");
}

function equal(){
  switch (operationType){
    case "plus": 
      result = Number(firstAppendage) + Number(secondAppendage);
      display.textContent = `${result}`;
      console.log("adding executed");
      //assign secondAppendage to finalFirstNum and clear secondAppendage
      finalFirstNum = result;
      secondAppendage = "";
      break;
    case "minus": 
      result = Number(firstAppendage) - Number(secondAppendage);
      display.textContent = `${result}`;
      finalFirstNum = result;
      secondAppendage = "";
      break;
    case "times": 
      result = Number(firstAppendage) * Number(secondAppendage);
      display.textContent = `${result}`;
      finalFirstNum = result;
      secondAppendage = "";
      break;
    case "divide": 
      result = Number(firstAppendage) / Number(secondAppendage);
      display.textContent = `${result}`;
      finalFirstNum = result;
      secondAppendage = "";
      break;
    case "flipSign": 
      result = -(Number(secondAppendage));
      display.textContent = `${result}`;
      finalFirstNum = result;
      secondAppendage = "";
      break;
      //default:

  }

}




function flipSign(){
  if (operationType === ""){
    result = -(Number(firstAppendage));
    firstAppendage = result;
    display.textContent = `${result}`;
    //operationType = "flipSign";
  }else{
    if (!secondAppendage){
      firstAppendage = -firstAppendage;
      display.textContent = `${firstAppendage}`;
      operationType = "flipSign";
    }else{
      secondAppendage = -secondAppendage;
      display.textContent = `${secondAppendage}`;
      operationType = "flipSign";
    }
    
  }
}

