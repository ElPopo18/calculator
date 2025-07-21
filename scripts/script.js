document.addEventListener('DOMContentLoaded', function () {
    let num1 = 10;
    let num2 = 5;
    let operator = '/';
    let display = document.querySelector(".display")

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
            display.textContent = btn.textContent;
        })
    })
    

    Object.values(numbers).forEach(btn => {
        btn.addEventListener("click", function printNumbers() {
            display.textContent = btn.textContent;
        })
    })

    console.log(display.textContent);

    operate(num1, num2, operator);

    function operate(num1, num2, operator){
        switch (operator){
            case '+':
                addition(num1, num2);
                break;
            case '-':
                subtraction(num1, num2);
                break;
            case '*':
                multiplication(num1, num2);
                break;
            case '/':
                division(num1, num2);
                break;
        }
    }

    function addition(num1, num2){
        console.log (num1 + num2);
    }

    function subtraction(num1, num2){
        console.log (num1 - num2);
    }

    function multiplication(num1, num2){
        console.log (num1 * num2);
    }

    function division(num1, num2){
        console.log (num1 / num2);
    }




})