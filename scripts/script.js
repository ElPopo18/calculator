document.addEventListener('DOMContentLoaded', function () {
    let firstNumber = '';
    let secondNumber = '';
    let operator = '';
    let globalCounter = 0;
    let result = 0;
    let display = document.querySelector(".display");
    const clear = document.querySelector(".clear");
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
            let filteredOperator = display.textContent.split('')
            .slice(-1)
            .filter((character) => numerical.includes(character))
            if(filteredOperator.length == 1 && operator == ''){
                operator = '';
                globalCounter ++;
                operator = btn.textContent;
                display.textContent += operator
            } else if(filteredOperator.length == 1 && operator != '') {
                operate()
                operator = ''
                operator = btn.textContent;
                display.textContent += operator;
            }
        })
    })
    
    Object.values(numbers).forEach(btn => {
        btn.addEventListener("click", function printNumbers() {
            if(globalCounter === 0 || globalCounter === 1){
                if(display.textContent == 0){
                    display.textContent = '';
                }
                let numberPlaceholder = btn.textContent;
                    globalCounter++;
                    firstNumber += numberPlaceholder;
                    display.textContent += numberPlaceholder;
            }
            let filteredNumbers = display.textContent.split('')
            .slice(-2)
            .filter((character) => operatorsList.includes(character));
            if(result != '' && filteredNumbers == ''){
                clearDisplay();
                display.textContent = '';
                let numberPlaceholder = btn.textContent;
                globalCounter++;
                firstNumber += numberPlaceholder;
                display.textContent += numberPlaceholder;
            }else if(globalCounter >= 2 && filteredNumbers.length > 0){
                let numberPlaceholder = btn.textContent;
                secondNumber += numberPlaceholder;
                display.textContent += numberPlaceholder;
            }
        })
    })

    clear.addEventListener("click", clearDisplay);

    equalTo.addEventListener("click", operate)

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
            case (secondNumber == ''):
                break;
        }
    }

    function addition(){
        firstNumber = parseFloat(firstNumber);
        secondNumber = parseFloat(secondNumber);
        let trueResult = firstNumber + secondNumber;
        result = trueResult.toFixed(2);
        display.textContent = result;
        if(display.textContent.includes('.')){
            display.textContent = removeZeros(display.textContent);
        }
        firstNumber = result.toString();
        secondNumber = '';
        
    }

    function subtraction(){
        firstNumber = parseFloat(firstNumber);
        secondNumber = parseFloat(secondNumber);
        let trueResult = firstNumber - secondNumber;
        result = trueResult.toFixed(2);
        display.textContent = result;
        if(display.textContent.includes('.')){
            display.textContent = removeZeros(display.textContent);
        }
        firstNumber = result.toString();
        secondNumber = '';
        
    }

    function multiplication(){
        firstNumber = parseFloat(firstNumber);
        secondNumber = parseFloat(secondNumber);
        let trueResult = firstNumber * secondNumber;
        result = trueResult.toFixed(2);
        display.textContent = result;
        if(display.textContent.includes('.')){
            display.textContent = removeZeros(display.textContent);
        }
        firstNumber = result.toString();
        secondNumber = '';
    }

    function division(){
        firstNumber = parseFloat(firstNumber);
        secondNumber = parseFloat(secondNumber);
        if(secondNumber === 0){
            display.textContent = "AYOOO! What are you doing!? >:(";
        }else{
            let trueResult = firstNumber / secondNumber;
            result = trueResult.toFixed(2);
            display.textContent = result;
            if(display.textContent.includes('.')){
                display.textContent = removeZeros(display.textContent);
            }
            
            firstNumber = result.toString();
            secondNumber = '';
        }        
    }

    function clearDisplay(){
        display.textContent = 0;
        firstNumber = '';
        secondNumber = '';
        operator = '';
        result = '';
        globalCounter = 0;
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
        }
    }

})