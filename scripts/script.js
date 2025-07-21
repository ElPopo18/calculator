document.addEventListener('DOMContentLoaded', function () {
    let num1 = 10;
    let num2 = 5;
    let operator = '/';

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