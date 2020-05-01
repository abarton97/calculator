var display = document.querySelector("#display");
const buttons = document.querySelectorAll('#buttons');

let total;
let displayValue = "";
let storedValue = "";
let displayOperator = "";
let storedOperator = "";
let totalOperator = "";

let numberPressed = false;
let operatorPressed = false;
let equalsPressed = false;

function clearDisplay() {
  displayValue = "";
  storedValue = "";
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
  if (displayOperator == '+' && numberPressed) {
    operatorPressed = true;
    totalOperator = displayOperator
  } else if (displayOperator == '÷' && numberPressed) {
    operatorPressed = true;
    totalOperator = displayOperator
  } else if (displayOperator == '×' && numberPressed) {
    operatorPressed = true;
    totalOperator = displayOperator
  } else if (displayOperator == '-' && numberPressed) {
    operatorPressed = true;
    totalOperator = displayOperator
  } else if (displayOperator == "=" && !equalsPressed && numberPressed) {
    total = operatorTasks(
      totalOperator,
      Number(displayValue),
      Number(storedValue));
    display.innerText = total;
    displayValue = total;
    storedValue = "";
  }
  let MAX_LENGTH = 9;
  if (display.innerText.length > MAX_LENGTH) {
    display.style.fontSize = "20px";
    display.innerText = 'ERROR: Max Length';
  }
}

let remove = "";

function getNumbers(e) {
  let negativePositive = e.target.innerText;
  if (!operatorPressed && !equalsPressed) {
    numberPressed = true;
    if (negativePositive == "+/-") {
      displayValue = (-1) * Number(displayValue);
      display.innerText = displayValue;
    }
    if (displayValue.length <= 8) {
      displayValue += e.target.innerText;
      display.innerText = displayValue;
    }
  } else if (!equalsPressed && operatorPressed) {
    if (negativePositive == "+/-") {
      storedValue = (-1) * Number(storedValue);
      display.innerText = storedValue;
    }
    if (storedValue.length <= 8) {
      storedValue += e.target.innerText;
      display.innerText = storedValue;
      color = true;
      console.log(displayColor)
    }
  }
}

let displayColor = "";
let color;

function changeColors(e) {
  displayColor = e.target.innerText;
  if (operatorPressed && !color) {
    this.style.backgroundColor = "red";
    console.log(displayColor)
  } else if (color) {
    //displayColor.style.backgroundColor = "white";
  }
}

const numbers = document.querySelectorAll(".number");
numbers.forEach((number) => number.addEventListener("click", getNumbers));

const operators = document.querySelectorAll(".operator");
operators.forEach((operator) => operator.addEventListener("click", getOperators));

const clear = document.querySelectorAll(".clear");
clear.forEach((clear) => clear.addEventListener("click", clearDisplay));

const colorops = document.querySelectorAll(".operator");
colorops.forEach((colorop) => colorop.addEventListener("click", changeColors));
