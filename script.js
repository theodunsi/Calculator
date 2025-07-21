const add = function(a,b) {
  return parseFloat(a) + parseFloat(b);
};

const subtract = function(a,b) {
	return a - b;
};

const multiply = function(a,b) {
	return a * b;
};

const divide = function(a,b) {
    return Math.round((a / b) * 100) / 100;
}

let firstNumber;
let operator;
let lastNumber;

function operate(operator, firstNumber, lastNumber) {
    return operator(firstNumber,lastNumber);
}

const digitButtons = document.querySelectorAll(".digitButtons button");
const operators = document.querySelectorAll(".operators button")
const outputDisplay = document.querySelector(".outputDisplay")
const equals = document.querySelector(".equals");
const clear = document.querySelector(".clear");

outputDisplay.style.font = "140px 'Ariel', sans-serif";

let firstDigit = '';
let secondDigit = '';
let currentOperator = '';
let isOperatorClicked = false;
let shouldClearDisplay = false;
let hasChainedOperator = false;

const operations = {
  "+": add,
  "-": subtract,
  "*": multiply,
  "/": divide
};


digitButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (shouldClearDisplay) {
            outputDisplay.textContent = '';
            shouldClearDisplay = false;
        }
        outputDisplay.textContent += button.textContent; 
        if (isOperatorClicked = true) {
            secondDigit = outputDisplay.textContent;
            isOperatorClicked = false;
        };
    })
});

operators.forEach(button => {
    button.addEventListener("click", () => {
        if (firstDigit && secondDigit) {
            outputDisplay.textContent = operate(operations[currentOperator], firstDigit, secondDigit);
            firstDigit = Number(outputDisplay.textContent);
            secondDigit = '';
        }
        else {
            firstDigit = outputDisplay.textContent;
        }
        isOperatorClicked = true; 
        currentOperator = button.textContent;
        shouldClearDisplay = true;
    })
})

equals.addEventListener("click", () => {
    outputDisplay.textContent = operate(operations[currentOperator], firstDigit, secondDigit);
})

clear.addEventListener("click", () => {
    outputDisplay.textContent = '';
    firstDigit = null;
    secondDigit = null;
    currentOperator = null;
    isOperatorClicked = false;
    shouldClearDisplay = false;
});