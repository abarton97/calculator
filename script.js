var display = document.querySelector("#display");
const buttons = document.querySelectorAll('#buttons');
var divs = document.querySelectorAll('.operator');

let total;
let firstNumber = "";
let secondNumber = "";
let displayOperator = "";
let storedOperator = "";
let totalOperator = "";

let numberPressed = false;
let operatorPressed = false;
let equalsPressed = false;

function clearDisplay() {
  firstNumber = "";
  secondNumber = "";
  displayOperator = "";
  storedOperator = "";
  numberPressed = false;
  operatorPressed = false;
  equalsPressed = false;
  display.textContent = "0";
}

function operatorTasks(operator = "", numA, numB) {
  if (operator == "+") {
    return numA + numB;
  } else if (operator == "×") {
    return numA * numB;
  } else if (operator == "÷") {
    let p = numA / numB;
    return p.toFixed(2);
  } else if (operator == "-") {
    return numA - numB;
  }
}

function getOperators(e) {
  displayOperator = e.target.innerText;
  if (!operatorPressed && displayOperator == '+' && numberPressed) {
    divs[3].style.backgroundColor = "#cccccc";
    operatorPressed = true;
    totalOperator = displayOperator;
  } else if (!operatorPressed && displayOperator == '÷' && numberPressed) {
    divs[0].style.backgroundColor = "#cccccc";
    operatorPressed = true;
    totalOperator = displayOperator;
  } else if (!operatorPressed && displayOperator == '×' && numberPressed) {
    divs[1].style.backgroundColor = "#cccccc";
    operatorPressed = true;
    totalOperator = displayOperator;
  } else if (!operatorPressed && displayOperator == '-' && numberPressed) {
    divs[2].style.backgroundColor = "#cccccc";
    operatorPressed = true;
    totalOperator = displayOperator;
  } else if (displayOperator == "=" && !equalsPressed && numberPressed) {
    total = operatorTasks(
      totalOperator,
      Number(firstNumber),
      Number(secondNumber));
    display.innerText = total;
    operatorPressed = false;
    firstNumber = total;
    secondNumber = "";
  }
  let MAX_LENGTH = 9;
  if (display.innerText.length > MAX_LENGTH) {
    display.style.fontSize = "20px";
    display.innerText = 'ERROR: Max Length';
  }
}

function getNumbers(e) {
  let negativePositive = e.target.innerText;
  if (!operatorPressed && !equalsPressed) {
    numberPressed = true;
    if (negativePositive == "+/-") {
      firstNumber = (-1) * Number(firstNumber);
      display.innerText = firstNumber;
    }
    if (firstNumber.length <= 8) {
      firstNumber += e.target.innerText;
      display.innerText = firstNumber;
    }
  } else if (!equalsPressed && operatorPressed) {
    if (negativePositive == "+/-") {
      secondNumber = (-1) * Number(secondNumber);
      display.innerText = secondNumber;
    }
    if (secondNumber.length <= 8) {
      secondNumber += e.target.innerText;
      divs[0].style.backgroundColor = "white";
      divs[1].style.backgroundColor = "white";
      divs[2].style.backgroundColor = "white";
      divs[3].style.backgroundColor = "white";
      display.innerText = secondNumber;
    }
  }
}

const numbers = document.querySelectorAll(".number");
numbers.forEach((number) => number.addEventListener("click", getNumbers));

const operators = document.querySelectorAll(".operator");
operators.forEach((operator) => operator.addEventListener("click", getOperators));

const clear = document.querySelectorAll(".clear");
clear.forEach((clear) => clear.addEventListener("click", clearDisplay));
