const calculatorScreen = document.querySelector('.calculator-screen')
const updateScreen = (number) => {
    calculatorScreen.value = number
}

const numbers = document.querySelectorAll(".number")
numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        updateScreen(event.target.value)
    })
})

let prevNumber = ''
let calculationOperator = ''
let currentNumber = '0'

const inputNumber = (number) => {
    if(currentNumber === '0') {
        currentNumber = number
    } else {
        currentNumber += number
    }
}

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })
})

const operators = document.querySelectorAll(".operator")
const inputOperator = (operator) => {
    if(calculationOperator === '') {
        prevNumber = currentNumber
    }
    calculationOperator = operator
    currentNumber = '0'
}
operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value)
    })
})

const calculate = () => {
    let result = ''
    switch(calculationOperator) {
        case "+" :
            result = parseFloat(prevNumber) + parseFloat(currentNumber)  
            break
        case "-" :
            result = prevNumber - currentNumber
            break
        case "*" :
            result = prevNumber * currentNumber
            break
        case "/" :
            result = prevNumber / currentNumber
            break
        default:
            break
    }
    currentNumber = result
    calculationOperator = ''
}

const equalSign = document.querySelector(".equal-sign")
equalSign.addEventListener("click", () => {
    calculate()
    updateScreen(currentNumber)
})

const clearAll = () => {
    prevNumber = ''
    calculationOperator = ''
    currentNumber = '0'
}
const clearBtn = document.querySelector(".all-clear")
clearBtn.addEventListener("click", () => {
    clearAll()
    updateScreen(currentNumber)
})

const inputDecimal = (dot) => {
   if(currentNumber.includes('.')) {
    return
   }
   currentNumber += dot
}

const decimal = document.querySelector(".decimal")
decimal.addEventListener("click", (event) => {
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})

const percen = () => {
    prevNumber = ''
    calculationOperator = ''
    currentNumber = currentNumber / 100
}
const percentages = document.querySelector(".percentage")
percentages.addEventListener("click", (event) => {
    percen(event.target.value)
    updateScreen(currentNumber)
})

const sqrt = () => {
    prevNumber = ''
    calculationOperator = ''
    currentNumber = Math.sqrt(currentNumber);
}
const akar = document.querySelector(".sqrt")
akar.addEventListener("click", (event) => {
    sqrt(event.target.value)
    updateScreen(currentNumber)
})

const squared = () => {
    prevNumber = ''
    calculationOperator = ''
    currentNumber = Math.pow(currentNumber, 2);
}
const pangkat = document.querySelector(".squared")
pangkat.addEventListener("click", (event) => {
    squared(event.target.value)
    updateScreen(currentNumber)
})

const perx = () => {
    prevNumber = ''
    calculationOperator = ''
    currentNumber = (1/currentNumber).toFixed(4)
}
const perX = document.querySelector(".perx")
perX.addEventListener("click", (event) => {
    perx(event.target.value)
    updateScreen(currentNumber)
})

const minplus = () => {
    currentNumber = currentNumber*-1
}
const plusmin = document.querySelector(".minplus")
plusmin.addEventListener("click", (event) => {
    minplus(event.target.value)
    updateScreen(currentNumber)
})
