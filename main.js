const display = document.querySelector("#display");
const grid = document.querySelector("#grid");

let num1 = 0;
let num2 = 0;
let operator = "";
let phase = "ONE";

// math operations
let add = (num1, num2) => {
  return num1 + num2;
};

let subtract = (num1, num2) => {
  return num1 - num2;
};

let multiply = (num1, num2) => {
  return num1 * num2;
};

let divide = (num1, num2) => {
  return num1 / num2;
};

let operate = (num1, num2, operator) => {
  switch (operator) {
    case "add":
      return add(num1, num2);
    case "subtract":
      return subtract(num1, num2);
    case "multiply":
      return multiply(num1, num2);
    case "divide":
      return divide(num1, num2);
    default:
      return "Invalid operator";
  }
};

// DOM manipulation
grid.addEventListener("click", (event) => {
  let target = event.target;
  switch (target.className) {
    case "number":
      if ((phase = "ONE")) {
        num1 === 0
          ? (num1 = Number(target.textContent))
          : (num1 = num1 + target.textContent);
          display.textContent = num1;
      };
      break;
    case "operator":
      display.textContent = target.className + " " + target.textContent;
      break;
    default:
      display.textContent = "something else";
  }
});
