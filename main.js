const display = document.querySelector("#display");
const grid = document.querySelector("#grid");

let num1 = 0;
let num2 = 0;
let operator = "";
let phase1 = true;
let result = 0;
display.textContent = 0;

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
// grid.addEventListener("click", (event) => {
//   let target = event.target;
//   switch (target.className) {
//     case "number":
//       if ((phase = "ONE")) {
//         num1 === 0
//           ? (num1 = Number(target.textContent))
//           : (num1 = num1 + target.textContent);
//           display.textContent = num1;
//       };
//       break;
//     case "operator":
//       display.textContent = target.className + " " + target.textContent;
//       break;
//     default:
//       display.textContent = "something else";
//   }
// });


grid.addEventListener("click", (event) => {
    let target = event.target;
    switch (target.className) {
        case "number":
            if (phase1 === true) {
                num1 === 0
                    ? (num1 = Number(target.textContent))
                    : (num1 = num1 + target.textContent);
                display.textContent = num1;
                num1 = Number(num1);
                console.log(phase1);
                console.log("num1: ", num1);
            } else {
                num2 === 0
                    ? (num2 = Number(target.textContent))
                    : (num2 = num2 + target.textContent);
                display.textContent = num2;
                num2 = Number(num2);
                console.log(phase1);
                console.log("num2: ", num2);
            };
            break;
        case "operator":
            operator = target.id;
            display.textContent = operator;
            console.log(operator);
            phase1 = !phase1;
            break;
        case "clear":
            num1 = 0;
            num2 = 0;
            result = 0;
            operator = "";
            phase1 = true;
            display.textContent = num1;
            break;
        case "equal":
            result = operate(num1, num2, operator);
            num1 = result;
            num2 = 0;
            console.log("result: ", result);
            display.textContent = result;
            phase1 = true;
            break;
        case "plus-minus":
            if (phase1 === true) {
                num1 = num1 * -1;
                display.textContent = num1;
            } else {
                num2 = num2 * -1;
                display.textContent = num2;
            };
            console.log("num1: ", num1);
            console.log("num2: ", num2);
            break;
        case "percent":
            if (phase1 === true) {
                num1 = num1 / 100;
            } else {
                num2 = num2 / 100;
            };
            console.log("num1: ", num1);
            console.log("num2: ", num2);
            break;
        default:
            display.textContent = "something else";
    }
});