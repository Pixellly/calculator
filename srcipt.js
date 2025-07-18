let leftOperand=''; let operator=null; let rightOperand = ''; let newOperation = false;

function sum(a,b){
    return a+b
}

function subtract(a,b){
    return a-b
}

function multiply(a,b){
    return a*b
}

function divide(a,b){
    return a/b
}

function operate(operator, a, b){
    const num1 = parseFloat(a)
    const num2 = parseFloat(b)
    if (operator==="+"){ return Math.round(sum(num1, num2)* 1000) / 1000}
    if (operator==="-"){ return Math.round(subtract(num1, num2)* 1000) / 1000}
    if (operator==="*"){ return Math.round(multiply(num1, num2)* 1000) / 1000}
    if (operator==="/"){ 
        if(b==0){
            alert('Division by 0 = bad');
            clear();
            return null;
        }else {return Math.round(divide(num1, num2)* 1000) / 1000}
    }
}

const screen = document.querySelector('.screen')
const clearButton = document.querySelector('.clear')

const sumButton = document.querySelector('.sum')
const subButton = document.querySelector('.subtract')
const multButton = document.querySelector('.multiply')
const divButton = document.querySelector('.divide')
const equalButton = document.querySelector('.equal')

const one = document.querySelector('.one')
const two = document.querySelector('.two')
const three = document.querySelector('.three')
const four = document.querySelector('.four')
const five = document.querySelector('.five')
const six = document.querySelector('.six')
const seven = document.querySelector('.seven')
const eight = document.querySelector('.eight')
const nine = document.querySelector('.nine')
const zero = document.querySelector('.zero')
const decimal = document.querySelector('.decimal')

clearButton.addEventListener('click', clear)

sumButton.addEventListener('click', () => display("+"))
subButton.addEventListener('click', () => display("-"))
multButton.addEventListener('click', () => display("*"))
divButton.addEventListener('click', () => display("/"))

one.addEventListener('click', ()=> display(1))
two.addEventListener('click', ()=> display(2))
three.addEventListener('click', ()=> display(3))
four.addEventListener('click', ()=> display(4))
five.addEventListener('click', ()=> display(5))
six.addEventListener('click', ()=> display(6))
seven.addEventListener('click', ()=> display(7))
eight.addEventListener('click', ()=> display(8))
nine.addEventListener('click', ()=> display(9))
zero.addEventListener('click', ()=> display(0))
decimal.addEventListener('click', ()=> display('.'))

function clear(){
    screen.innerText ="";
    leftOperand = ''; operator=null; rightOperand='';
}


function display(exp) {
    if (exp === '.') {
        if (!operator) {
            if (!leftOperand.includes('.')) {
                leftOperand += '.';
                screen.innerText = leftOperand;
            }
        } else {
            if (!rightOperand.includes('.')) {
                rightOperand += '.';
                screen.innerText = rightOperand;
            }
        }
        return;
    }

    if (!isNaN(exp)) {
        if (!operator) {
            if(newOperation){
                clear();
                leftOperand += exp;
                screen.innerText = leftOperand;
                newOperation = false
            } else{
            leftOperand += exp;
            screen.innerText = leftOperand;
        }
        } else {
            rightOperand += exp;
            screen.innerText = rightOperand;
        }
        return;
    }

    if (!operator && leftOperand) {
        operator = exp;
    } else if (operator && rightOperand) {
        // chain operation: 0.1 + 0.9 + 1
        let result = operate(operator, leftOperand, rightOperand);
        leftOperand = result.toString();
        operator = exp;
        rightOperand = '';
        screen.innerText = leftOperand
    }
}


equalButton.addEventListener('click', () => {
    if(rightOperand){
        screen.innerText = operate(operator, leftOperand, rightOperand)
        leftOperand = screen.innerText 
        rightOperand = ''
        operator = null
        newOperation= true
    }
})

