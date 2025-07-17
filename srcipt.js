// let num1, num2, operator
// sumButton.addEventListener('click', () => {
//     const exp = prompt('Enter 2 numbers to add', '2+2')
//     const parts = exp.split('+')

//     const a = parseInt(parts[0].trim())
//     const b = parseInt(parts[1].trim())

//     alert(sum(a,b))
// })

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

function operate(operator, num1, num2){
    if (operator==="+"){ return sum(num1, num2)}
    if (operator==="-"){ return subtract(num1, num2)}
    if (operator==="*"){ return multiply(num1, num2)}
    if (operator==="/"){ return divide(num1, num2)}
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

clearButton.addEventListener('click', () => screen.innerText ="")

equalButton.addEventListener('click', () => {
    const parts = screen.innerText.match(/(\d*\.\d+|\d+|[+\-*/()])/g)

    const num1 = parseFloat(parts[0].trim())
    const operator = parts[1].trim()
    const num2 = parseFloat(parts[2].trim())

    if (operator === "+"){
        screen.innerText = sum(num1, num2)
    }
     if (operator === "-"){
        screen.innerText = subtract(num1, num2)
    }
     if (operator === "*"){
        screen.innerText = multiply(num1, num2)
    }
     if (operator === "/"){
        screen.innerText = divide(num1, num2)
    }
})

sumButton.addEventListener('click', () => screen.innerText+="+")
subButton.addEventListener('click', () => screen.innerText+="-")
multButton.addEventListener('click', () => screen.innerText+="*")
divButton.addEventListener('click', () => screen.innerText+="/")

one.addEventListener('click', ()=> screen.innerText+=1)
two.addEventListener('click', ()=> screen.innerText+=2)
three.addEventListener('click', ()=> screen.innerText+=3)
four.addEventListener('click', ()=> screen.innerText+=4)
five.addEventListener('click', ()=> screen.innerText+=5)
six.addEventListener('click', ()=> screen.innerText+=6)
seven.addEventListener('click', ()=> screen.innerText+=7)
eight.addEventListener('click', ()=> screen.innerText+=8)
nine.addEventListener('click', ()=> screen.innerText+=9)
zero.addEventListener('click', ()=> screen.innerText+=0)
decimal.addEventListener('click', ()=> screen.innerText+='.')
