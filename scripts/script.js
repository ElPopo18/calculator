document.addEventListener('DOMContentLoaded', function () {
    let firstNumber = '';
    let secondNumber = '';
    let operator = '';
    let globalCounter = 0;
    let display = document.querySelector(".display");
    const numerical = '0123456789';
    const operatorsList = '+-*/';

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

    Object.values(operators).forEach(btn => {  //Will convert the values of the parameters of the operators object into an array
        btn.addEventListener("click", function printOperators() {
            /* Will convert display.textContent into an array, take the last element of it
            and convert it into another array, then it will filter that array and check if it
            contains a number or a operator, if it contains a number then it will execute the conditional
            and print the operator in the display screen, if not then it will not print anything */
            let filteredOperator = display.textContent.split('')
            .slice(-1)
            .filter((character) => numerical.includes(character))
            if(filteredOperator.length == 1 && operator == ''){
                console.log(filteredOperator);
                globalCounter ++;
                operator = btn.textContent;
                display.textContent += operator
            }
        })
    })
    
    Object.values(numbers).forEach(btn => {
        btn.addEventListener("click", function printNumbers() {
            if(globalCounter === 0 || globalCounter === 1){
                let numberPlaceholder = btn.textContent;
                    globalCounter++;
                    display.textContent += numberPlaceholder;
                    firstNumber = display.textContent;
            }
            /* Will convert display.textContent into an array, take the last element of it
            and convert it into another array, then it will filter that array and check if it
            contains a number or a operator, if it contains a operator then it will execute the conditional
            and print the numbers in the display screen, if not then it will not print anything */
            let filteredNumbers = display.textContent.split('')
            .slice(-2)
            .filter((character) => operatorsList.includes(character));
            if(globalCounter >= 2 && filteredNumbers.length > 0){
                let numberPlaceholder = btn.textContent;
                display.textContent += numberPlaceholder;
                secondNumber = display.textContent;
            }
        })
    })



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