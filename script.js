const add = function(a,b) {
  return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const multiply = function(a,b) {
	return a * b;
};

const divide = function(a,b) {
    return (a / b);
}

let firstNumber;
let operator;
let lastNumber;

function operate(operator, firstNumber, lastNumber) {
    return operator(firstNumber,lastNumber);
}

const digitButtons = document.querySelectorAll(".digitButtons button");
const outputDisplay = document.querySelector(".outputDisplay")

digitButtons.forEach(button => {
    button.addEventListener("click", () => {
        outputDisplay.textContent += button.textContent;
    })
})

console.log(operate(subtract, 5, 4));
// console.log(subtract(4,5));
// console.log(multiply(5,4));
// console.log(divide(5,4));