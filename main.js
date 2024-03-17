const display = document.querySelector("#display");
const grid = document.querySelector("#grid");

let num1 = 0; 
let num2 = null; 
let operator = ""; 
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
            return num1;
    }
};



grid.addEventListener("click", (event) => {
    let target = event.target;
    switch (target.className) {
        case "number":
            if (num2 === null) num2 = 0; 
            num2 = (num2 * 10) + Number(target.textContent); 
            display.textContent = num2; 
            break;
        case "operator":
            if (num2 !== null) { 
                if (operator) { 
                    result = operate(num1, num2, operator); 
                    num1 = result; 
                } else {
                    num1 = num2; 
                }
                num2 = null; 
                operator = target.id; 
                display.textContent = operator; 
            } else {
                operator = target.id;
            }
            break;
        case "clear":
            num1 = 0;
            num2 = null;
            operator = "";
            result = 0;
            display.textContent = "0"; 
            break;
        case "equal":
            if (num2 !== null && operator) { 
                result = operate(num1, num2, operator); 
                display.textContent = result; 
                num1 = result; 
                num2 = null; 
                operator = ""; 
            }
            break;
        case "plus-minus":
            if (num2 !== null) { 
                num2 = num2 * -1;
                display.textContent = num2; 
            }
            break;
        case "percent":
            if (num2 !== null) {
                num2 = num2 / 100;
                display.textContent = num2; 
            } else {
                num1 = num1 / 100;
                display.textContent = num1;
            }
            break;
        default:
            display.textContent = "Invalid Input"; 
    }
});