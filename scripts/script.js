document.addEventListener('DOMContentLoaded', function () {
    let firstNumber = '';
    let secondNumber = '';
    let operator = '';
    let globalCounter = 0;
    let result = 0;
    let display = document.querySelector(".display");
    const clear = document.querySelector(".clear");
    const numerical = '0123456789';
    const operatorsList = '+-*/^';
    const equalTo = document.querySelector('.equalTo')

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
            let filteredOperator = display.textContent.split('')
            .slice(-1)
            .filter((character) => numerical.includes(character))
            if(filteredOperator.length == 1 && operator == ''){
                displayOperator(btn.textContent);
                globalCounter ++;
            } else if(filteredOperator.length == 1 && operator != '' && btn.textContent != '%') {
                operate();
                displayOperator(btn.textContent);
            }else if(btn.textContent == "%" && operator == ''){
                displayOperator(btn.textContent);
                operate();
                globalCounter ++;
            }else if(btn.textContent == "%" && operator != ''){
                operate();
                displayOperator(btn.textContent);
            } 
        })
    })

    Object.values(numbers).forEach(btn => {
        btn.addEventListener("click", function printNumbers() {
            if(globalCounter === 0 || globalCounter === 1){
                printFirstNumber(btn.textContent);
            }
            let filteredNumbers = display.textContent.split('')
            .slice(-2)
            .filter((character) => operatorsList.includes(character));
            if(result != '' && filteredNumbers == ''){
                clearDisplay();
                printFirstNumber(btn.textContent);
            }else if(globalCounter >= 2 && filteredNumbers.length > 0){
                printSecondNumber(btn.textContent);
            }
        })
    })

    clear.addEventListener("click", clearDisplay);

    equalTo.addEventListener("click", operate)

    function printFirstNumber(buttonText){
        if(display.textContent == 0){
            display.textContent = '';
        }
        let numberPlaceholder = buttonText;
        globalCounter++;
        firstNumber += numberPlaceholder;
        display.textContent += numberPlaceholder;
    }

    function printSecondNumber(buttonText){
        let numberPlaceholder = buttonText;
        secondNumber += numberPlaceholder;
        display.textContent += numberPlaceholder;
    }

    function displayOperator(buttonText){
        operator = ''
        operator = buttonText;
        if(operator != '%'){
            display.textContent += operator;
        }
    }

    function operate(){
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
            case (operator == '%' && secondNumber == ''):
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
        globalCounter = 0;
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