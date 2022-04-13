function calculate() {
    switch (operatorMemory) {
        case "plus":
            memory += +display.textContent;
            break;
        case "minus":
            memory -= +display.textContent;
            break;
        case "multiply":
            memory *= +display.textContent;
            break;
        case "divide":
            memory /= +display.textContent;
            break;
        default:
            console.log("That wasn't supposed to happen");
    }
}
function numberPress(number) {

    if (parseFloat(display.textContent) === 0 || nonNumberPressed) {
        display.textContent = +number.textContent;
        nonNumberPressed = false;
    } else if (display.textContent.length < 9) {
        display.textContent += +number.textContent;
    }
    
}

function operatorPress(operator) {
    
    if (memory === null) {
        memory = +display.textContent;
    } else {
        calculate();
    }
    display.textContent = memory;
    nonNumberPressed = true;
    operatorMemory = operator.id;
}

function equalPress() {
    if (operatorMemory !== null) {
        calculate();
        display.textContent = memory;
        memory = null;
        operatorMemory = null;
        nonNumberPressed = true;
    }
}

function clearPress() {
    display.innerText = 0;
    memory = null;
    operatorMemory = null;
}

function buttonPress() {
    const cList = this.classList;
    switch (true) {
        case cList.contains('number'):
            numberPress(this);
            break;
        case cList.contains('operator'):
            operatorPress(this);
            break;
        case cList.contains('equal'):
            equalPress();
            break;
        case cList.contains('clear'):
            clearPress();
            break;
        default:
            console.log("That wasn't supposed to happen");
            break;
    }
}

let memory = null;
let nonNumberPressed = false;
let operatorMemory = null;
const display = document.querySelector('#display');
const buttons = document.querySelectorAll('.button');
buttons.forEach(button => button.addEventListener('click', buttonPress));