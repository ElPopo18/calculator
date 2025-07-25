document.addEventListener('DOMContentLoaded', function () {
    let firstNumber = '';
    let secondNumber = '';
    let operator = '';
    let result = 0;
    let display = document.querySelector(".display");
    const clear = document.querySelector(".clear");
    const numerical = '0123456789';
    const equalTo = document.querySelector('.equalTo')

    const counters = {
        firstNumber: 0,
        firstNumberDecimals:0,
        secondNumber: 0,
        secondNumberDecimals: 0,
    }

    const numbers = {
        one: document.querySelector(".one"),
        two: document.querySelector(".two"),
        three: document.querySelector(".three"),
        four: document.querySelector(".four"),
        five: document.querySelector(".five"),
        six: document.querySelector(".six"),
        seven: document.querySelector(".seven"),
        eight: document.querySelector(".eight"),
        nine: document.querySelector(".nine"),
        cero: document.querySelector(".cero"),
        decimal: document.querySelector(".decimal")
    }

    const operators = {
        addition: document.querySelector(".addition"),
        subtraction: document.querySelector(".subtraction"),
        multiplication: document.querySelector(".multiplication"),
        division: document.querySelector(".division"),
        power: document.querySelector(".power"),
        percentage: document.querySelector(".percentage"),
    }

    Object.values(operators).forEach(btn => {
        btn.addEventListener("click", function printOperators() {
            if(firstNumber == ''){
                firstNumber = 0;
            }
            let filteredOperator = display.textContent.split('')
            .slice(-1)
            .filter((character) => numerical.includes(character))
            if(filteredOperator.length == 1 && operator == ''){
                if(btn.textContent == '%'){
                    displayOperator(btn.textContent);
                    operate();
                } else {
                    displayOperator(btn.textContent);
                }
            }else if(filteredOperator.length == 1 && operator != '') {
                operate();
                if(btn.textContent == '%' && operator != '%'){
                    displayOperator(btn.textContent);
                    operate();
                }else{
                    displayOperator(btn.textContent);
                }
                
            }
        })
    })

    Object.values(numbers).forEach(btn => {
        btn.addEventListener("click", function printNumbers() {
            if(operator == ''){
                if(display.textContent == 0 && firstNumber != '0.'){
                    display.textContent = '';
                }
                if(result != ''){
                    if(btn.textContent == '.'){
                        clearDisplay();
                        display.textContent = '';
                        firstNumber = printDecimal(btn.textContent, firstNumber);
                    }else{
                        clearDisplay();
                        display.textContent = '';
                        firstNumber = printFirstNumber(btn.textContent, firstNumber);
                    }
                }else{
                    firstNumber = printFirstNumber(btn.textContent, firstNumber);
                    btn.disabled = false;
                }

            } else if(operator != ''){
                    secondNumber = printSecondNumber(btn.textContent, secondNumber);
                    btn.disabled = false;
                
            }
        })
    })

    function printDecimal(buttonText, number){
        if(number.includes('.')){
            numbers.decimal.disabled = true;
            return number;
        }else if(number == ''){
            number += `0${buttonText}`;
            display.textContent += number;
            return number;
        }else{
            number += buttonText;
            display.textContent += buttonText;
            return number;
        }

    }

    clear.addEventListener("click", clearDisplay);

    equalTo.addEventListener("click", operate)

    function printFirstNumber(buttonText, number){
        if(buttonText == '.' && counters.firstNumber < 3){
            counters.firstNumber++;
            number = printDecimal(buttonText, number);
            counters.firstNumber--;
            return number
        }else if(number.includes('.') && counters.firstNumberDecimals < 2){
            counters.firstNumberDecimals++;
            counters.firstNumber++;
            number += buttonText;
            display.textContent += buttonText;
            return number
        }else if(counters.firstNumber < 2){
            counters.firstNumber++;
            number += buttonText;
            display.textContent += buttonText;
            return number
        }
        return number;
    }

    function printSecondNumber(buttonText, number){
        if(buttonText == '.' && counters.secondNumber < 3){
            counters.secondNumber++;
            number = printDecimal(buttonText, number);
            counters.secondNumber--;
            return number
        }else if(number.includes('.') && counters.secondNumberDecimals < 2){
            counters.secondNumberDecimals++;
            counters.secondNumber++;
            number += buttonText;
            display.textContent += buttonText;
            return number
        }else if(counters.secondNumber < 2){
            counters.secondNumber++;
            number += buttonText;
            display.textContent += buttonText;
            return number
        }
        return number;
    }

    function displayOperator(buttonText){
        operator = ''
        operator = buttonText;
        if(operator != '%'){
            display.textContent += operator;
        }
    }

    function operate(){
        counters.firstNumber = 0;
        counters.firstNumberDecimals = 0;
        counters.secondNumber = 0;
        counters.secondNumberDecimals = 0;
        switch (true){
            case (operator == '+' && secondNumber != ''):
                addition();
                break;
            case (operator == '-' && secondNumber != ''):
                subtraction();
                break;
            case (operator == '*' && secondNumber != ''):
                multiplication();
                break;
            case (operator == '/' && secondNumber != ''):
                division();
                break;
            case (operator == '^' && secondNumber != ''):
                power();
                break;
            case (operator == '%'):
                percentage();
                break;
            case (secondNumber == ''):
                break;
        }
    }

    function addition(){
        result = resultOfOperation();
        display.textContent = result;
    }

    function subtraction(){
        result = resultOfOperation();
        display.textContent = result;
    }

    function multiplication(){
        result = resultOfOperation();
        display.textContent = result;
    }

    function division(){
        result = resultOfOperation();
        display.textContent = result;
    }

    function power(){
        result = resultOfOperation();
        display.textContent = result;
    }

    function percentage(){
        result = resultOfOperation();
        display.textContent = result;
    }

    function clearDisplay(){
        display.textContent = 0;
        firstNumber = '';
        secondNumber = '';
        operator = '';
        result = '';
        counters.firstNumber = 0;
        counters.firstNumberDecimals = 0;
        counters.secondNumber = 0;
        counters.secondNumberDecimals = 0;
    }

    function resultOfOperation(){
        let percentageNumber = 100
        let operationResult;
        let trueResult;
        firstNumber = parseFloat(firstNumber);
        secondNumber = parseFloat(secondNumber);
        switch (operator){
            case ('+'):
                operationResult = firstNumber + secondNumber;
                break;
            case ('-'):
                operationResult = firstNumber - secondNumber;
                break;
            case ('*'):
                operationResult = firstNumber * secondNumber;
                break;
            case ('/'):
                if(secondNumber === 0){
                    trueResult = "AYOOO! What are you doing!? >:(";
                    return trueResult;
                } else {
                    operationResult = firstNumber / secondNumber;
                    break;
                }
            case ('^'):
                operationResult = Math.pow(firstNumber, secondNumber);
                break;
            case ('%'):
                operationResult = firstNumber / percentageNumber;
                break;
        }
        trueResult = operationResult.toFixed(2);
        trueResult = trueResult.toString();
        if(trueResult.includes('.')){
            trueResult = removeZeros(trueResult);
        }
        firstNumber = trueResult;
        operator = '';
        secondNumber = '';
        return trueResult
    }

    function removeZeros(display){
        let removeZeros = display.split('')
        .slice(-3);
        if(removeZeros[1] == '0' && removeZeros[2] == '0'){
            display = display.slice(0, -3);
            return display;
        } else if (removeZeros[2] == '0'){
            display = display.slice(0, -1);
            return display;
        } else {
            return display;
        }
    }
})