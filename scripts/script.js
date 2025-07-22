document.addEventListener('DOMContentLoaded', function () {
    let firstNumber = '';
    let secondNumber = '';
    let operator = '';
    let globalCounter = 0;
    let display = document.querySelector(".display");
    const numerical = '0123456789';
    const operatorsList = '+-*/';
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
                secondNumber += numberPlaceholder;
                display.textContent += numberPlaceholder;
            }
        })
    })

    equalTo.addEventListener("click", operate)

    function operate(){
        switch (operator){
            case '+':
                addition(firstNumber, secondNumber);
                break;
            case '-':
                subtraction(firstNumber, secondNumber);
                break;
            case '*':
                multiplication(firstNumber, secondNumber);
                break;
            case '/':
                division(firstNumber, secondNumber);
                break;
        }
    }

    function addition(firstNumber, secondNumber){
        firstNumber = parseInt(firstNumber);
        secondNumber = parseInt(secondNumber);
        result = firstNumber + secondNumber;
        display.textContent = result;
    }

    function subtraction(firstNumber, secondNumber){
        firstNumber = parseInt(firstNumber);
        secondNumber = parseInt(secondNumber);
        result = firstNumber - secondNumber;
        display.textContent = result;
    }

    function multiplication(firstNumber, secondNumber){
        firstNumber = parseInt(firstNumber);
        secondNumber = parseInt(secondNumber);
        result = firstNumber * secondNumber;
        display.textContent = result;
    }

    function division(firstNumber, secondNumber){
        firstNumber = parseInt(firstNumber);
        secondNumber = parseInt(secondNumber);
        result = firstNumber / secondNumber;
        display.textContent = result;
    }

})