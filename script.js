function numberPress(number) {

    if (parseFloat(display.innerText) === 0) {
        display.innerText = +number.textContent;
    } else {
        display.innerText += +number.textContent;
    }
}

function operatorPress(operator) {
    alert(operator.id);
}

function equalPress() {
    alert('equal');
}

function clearPress() {
    display.innerText = 0;
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

const display = document.querySelector('#display');
const buttons = document.querySelectorAll('.button');
buttons.forEach(button => button.addEventListener('click', buttonPress));