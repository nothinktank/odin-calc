let display = document.querySelector(".display");

let firstAppendage = "";
let operationType = "";
let secondAppendage = "";
let result = 0;


function operand(num){
  //if num is a ".", check firstAppendage and secondAppendage if it already has another "."
  //if it doesnt, run the code below
  //if it does, add nothing to firstAppendage or secondAppendage
if (num === '.'){
  if (operationType === ""){
    if (String(firstAppendage).includes(num)){
      firstAppendage += "";
      display.textContent = `${firstAppendage}`;
    }else{
      firstAppendage += num;
      display.textContent = `${firstAppendage}`;
      console.log("first number pressed")
    }

  } else if (operationType === "equal"){
      //firstAppendage = "";
      firstAppendage += num;
        display.textContent = `${firstAppendage}`;
      console.log("result as first number recorded")
}else{
  if (String(secondAppendage).includes(num)){
    secondAppendage =+ "";
    display.textContent = `${secondAppendage}`;
  }else{
    secondAppendage += num;
    display.textContent =  `${secondAppendage}`;
    console.log(`first appended number is ${firstAppendage}`)
  }
}
}else{
  if (operationType === ""){
    firstAppendage = String(firstAppendage) + num;
    display.textContent = `${firstAppendage}`;
    console.log("first number pressed")
  } else if (operationType === "equal"){
    //firstAppendage = "";
    firstAppendage += num;
    display.textContent = `${firstAppendage}`;
    console.log("result as first number recorded")
  }else{
    secondAppendage += num;
    display.textContent =  `${secondAppendage}`;
    console.log(`first appended number is ${firstAppendage}`)
    }
  }
}

function operator(input){
  // if (String(firstAppendage).length === 0){
  //   return;
  // }else 
  if (operationType === "" || secondAppendage.length === 0 || operationType === "equal"){
    operationType = input;
    //finalFirstNum = firstAppendage;
    console.log(`first operator ${operationType} pressed `);
  }else {
    //because there's a chance that user may hit equal multiple times and then hit an operator after, 
    //the operator is expected to execute with the result from previous equal sign pressed
    //if secondappendage is not yet entered, then we need to store firstAppendage for the operator
    //pressed after the equal sign and displayed result, so displayed result needs to be the new firstAppendage

    switch (operationType){
      case 'plus': 
        
        console.log(`first num is ${firstAppendage} and second num is ${secondAppendage}`);

        result = Number(firstAppendage) + Number(secondAppendage);
        firstAppendage = result;
        operationType = input;
        display.textContent = `${result}`;
        secondAppendage = "";
        console.log("adding executed");
        break;
      case 'subtract': 
        
        console.log(`first num is ${firstAppendage} and second num is ${secondAppendage}`);

        result = Number(firstAppendage) - Number(secondAppendage);
        firstAppendage = result;
        operationType = input;
        display.textContent = `${result}`;
        secondAppendage = "";
        console.log("subtracting executed");
        break;
      case 'times': 
        console.log(`first num is ${firstAppendage} and second num is ${secondAppendage}`);

        result = Number(firstAppendage) * Number(secondAppendage);
        firstAppendage = result;
        operationType = input;
        display.textContent = `${result}`;
        secondAppendage = "";
        console.log("multiplying executed");
        break;
      case 'divide': 
        console.log(`first num is ${firstAppendage} and second num is ${secondAppendage}`);

        result = Number(firstAppendage) / Number(secondAppendage);
        firstAppendage = result;
        operationType = input;
        display.textContent = `${result}`;
        secondAppendage = "";
        console.log("dividing executed");
        break;
      case "flipSign": 
        console.log(`first num is ${firstAppendage} and second num is ${secondAppendage}`);
        // result = -( Number(secondAppendage)? Number(secondAppendage):Number(firstAppendage) );
        // //firstAppendage = result;
        // display.textContent = `${result}`;
        // secondAppendage = result;
        // //secondAppendage = "";

        operationType = input;
        console.log("displayed number sign flipped");

        break;
        // case "percent": 
        // console.log(`first num is ${firstAppendage} and second num is ${secondAppendage}`);
        // // if firstAppendage.

        // operationType = input;
        // console.log("displayed number sign flipped");

        // break;
    
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
  if (secondAppendage.length != 0){
    switch (operationType){
    case "plus": 
      result = Number(firstAppendage) + Number(secondAppendage);
      //firstAppendage = result;
      display.textContent = `${result}`;
      firstAppendage = ""; //new code
      secondAppendage = ""; 
      operationType = ""; //new code
      console.log("adding executed");
      break;
    case 'subtract': 
      result = Number(firstAppendage) - Number(secondAppendage);
      //firstAppendage = result;
      display.textContent = `${result}`;
      firstAppendage = ""; //new code
      secondAppendage = "";
      operationType = "";
      console.log("subtracting executed");
      break;
    case "times": 
      result = Number(firstAppendage) * Number(secondAppendage);
      //firstAppendage = result;
      display.textContent = `${result}`;
      firstAppendage = ""; //new code
      secondAppendage = "";
      operationType = "";
      console.log("multiplying executed");
      break;
    case "divide": 
      result = Number(firstAppendage) / Number(secondAppendage);
      //firstAppendage = result;
      display.textContent = `${result}`;
      firstAppendage = ""; //new code
      secondAppendage = "";
      operationType = "";
      console.log("dividing executed");
      break;
    case "flipSign": 
      // result = -(Number(secondAppendage));
      // display.textContent = `${result}`;
      // finalFirstNum = result;
      // secondAppendage = "";
      operationType = input;
      break;
      //default:

    }
  }else{

    operationType = "equal";
    firstAppendage = "";
    console.log('this equal has no effect')
    //operand();
  }


  

}


function flipSign(){
  if (operationType.length === 0 || operationType === 'equal'){
    if (String(firstAppendage) != 0){
      firstAppendage = - Number(firstAppendage);
      display.textContent = `${firstAppendage}`;
    }else{
      result = -(Number(result));
      display.textContent = `${result}`;
    }
    
  // }else if (String(secondAppendage).length === 0){
  //   firstAppendage = -(Number(firstAppendage));
  //   display.textContent = `${firstAppendage}`;
   
  }else if (operationType.length != 0 ){
    
    secondAppendage = -(Number(secondAppendage));
    display.textContent = `${secondAppendage}`;
  }
}

function percent(){
  if (operationType.length === 0 || operationType === 'equal'){
    if (String(firstAppendage) != 0){
      firstAppendage = Number(firstAppendage)/100;
      display.textContent = `${firstAppendage}`;
    }else{
      result = result / 100;
      display.textContent = `${result}`;
    }
    
  }else if (String(secondAppendage).length === 0){
    firstAppendage =  (Number(firstAppendage)) / 100;
    display.textContent = `${firstAppendage}`;
   
  }else if (operationType.length != 0 ){
    
    secondAppendage = (Number(secondAppendage)) / 100;
    display.textContent = `${secondAppendage}`;
    
  }


}

