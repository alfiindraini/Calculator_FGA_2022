
//Menampilkan nilai pada screen
const calculatorScreen = document.querySelector('.calculator-screen');
const updateScreen = (number) =>{
    calculatorScreen.value = number;
}   

//Mendefinisikan angka yang akan digunakan
const numbers = document.querySelectorAll(".number");
numbers.forEach((number)=>{
    number.addEventListener("click", (event)=>{
        inputNumber(event.target.value);
        updateScreen(currentNumber);
    })
})

//Menyimpan nilai angka 
let prevNum = '';
let calculationOperator = '';
let currentNumber = '0';

const inputNumber = (number) =>{
    if(currentNumber === '0'){
        currentNumber = number;
    }else{
        currentNumber += number;
    }
}

//Mendefinisikan operator
const operators = document.querySelectorAll(".operator");
operators.forEach((operator)=>{
    operator.addEventListener("click", (event)=>{
        inputOperator(event.target.value);
    })
})

const inputOperator = (operator) => {
    if(calculationOperator ===  ''){
        prevNum = currentNumber;
    }
    else{
        calculate();
        updateScreen(currentNumber);
        prevNum = currentNumber;
    }
    calculationOperator = operator;
    currentNumber = '0';
}

//Menampilkan Hasil "=" 
const equalSign = document.querySelector(".equal-sign");
    equalSign.addEventListener("click", (event)=>{
        calculate();
        updateScreen(currentNumber);
    })

const calculate = ()=>{
    let result='';
    switch(calculationOperator) {
        case "+":
            result = ((parseFloat(prevNum)/10) + (parseFloat(currentNumber)/10)) * 10;
            break;
        case "-":
            result = parseFloat(prevNum) - parseFloat(currentNumber);
            break;
        case "*":
            result = parseFloat(prevNum) * parseFloat(currentNumber);
            break;
        case "/":
            result = parseFloat(prevNum) / parseFloat(currentNumber);
            break;
        default:
            break;
    }
    currentNumber = result;
    calculationOperator = '';
}

//Mengaktifkan tombol AC pada kalkulator (reset)
const clearBtn = document.querySelector(".all-clear");
clearBtn.addEventListener('click', ()=> {
    clearAll();
    updateScreen(currentNumber);
})

const clearAll = () => {
    prevNum = '';
    calculationOperator = '';
    currentNumber = '0';
}

//Mengaktifkan tombol decimal
const decimal = document.querySelector(".decimal");
decimal.addEventListener('click', (event) =>{
    inputDecimal(event.target.value);
    updateScreen(currentNumber);
})

const inputDecimal = (dot) => {
    if(currentNumber.includes('.')){
        return;
    }
    currentNumber += dot;
}

//Mengaktifkan tombol "%"
const percent = document.querySelector(".percentage");
percent.addEventListener('click', (event)=>{
    inputPercentage(event.target.value);
    updateScreen(currentNumber);
})

const inputPercentage = ()=>{
    currentNumber /= 100;
}