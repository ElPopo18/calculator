document.addEventListener('DOMContentLoaded', function () {
    let firstNumber = '';
    let num2 = 5;
    let operator = '';
    let globalCounter = 0;
    let display = document.querySelector(".display")

    if(operator === true){
        console.log(true);
    } else if (operator === false){
        console.log(false);
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
    }

    const operators = {
        addition: document.querySelector(".addition"),
        subtraction: document.querySelector(".subtraction"),
        multiplication: document.querySelector(".multiplication"),
        division: document.querySelector(".division"),
    }

    Object.values(operators).forEach(btn => {
        btn.addEventListener("click", function printOperators() {
            if(display.textContent.length == 1 || display.textContent.length == 2){
                globalCounter ++;
                operator = btn.textContent;
                display.textContent += operator;
                console.log(operator);
                console.log(globalCounter);
            }
        })
    })
    
    Object.values(numbers).forEach(btn => {
        btn.addEventListener("click", function printNumbers() {
            let numberPlaceholder = btn.textContent;
                globalCounter ++;
                display.textContent += numberPlaceholder;
                firstNumber = display.textContent;
                console.log(globalCounter);
            
        })
    })

    if(globalCounter >= 2){
        Object.values(numbers).forEach(btn => {
            btn.addEventListener("click", function printNumbers() {
                let numberPlaceholder = btn.textContent;
                    display.textContent += numberPlaceholder;
                    firstNumber = display.textContent;
            })
        })
    }

    operate(firstNumber, num2, operator);

    function operate(firstNumber, num2, operator){
        switch (operator){
            case '+':
                addition(firstNumber, num2);
                break;
            case '-':
                subtraction(firstNumber, num2);
                break;
            case '*':
                multiplication(firstNumber, num2);
                break;
            case '/':
                division(firstNumber, num2);
                break;
        }
    }

    function addition(firstNumber, num2){
        console.log (firstNumber + num2);
    }

    function subtraction(firstNumber, num2){
        console.log (firstNumber - num2);
    }

    function multiplication(firstNumber, num2){
        console.log (firstNumber * num2);
    }

    function division(firstNumber, num2){
        console.log (firstNumber / num2);
    }




})