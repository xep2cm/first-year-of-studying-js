const resultElement = document.getElementById('result'); 
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2'); 
const submitBtn = document.getElementById('submit');
const plusBtn = document.getElementById('plus');
const minusBtn = document.getElementById('minus');
const multiplyBtn = document.getElementById('multiply');
const divisionBtn = document.getElementById('division');
let action = '+';

const sum = Number(input1.value) + Number(input2.value);
// resultElement.textContent = 'sum';

function printResult(result) {
    if (result >= 0) {
        resultElement.style.color = '';
    } else if (result < 0) {
        resultElement.style.color = 'red';
    }
    resultElement.textContent = result.toString();
}

plusBtn.onclick = function() {
    action = '+';
}
minusBtn.onclick = function() {
    action = '-';
}
multiplyBtn.onclick = function() {
    action = '*';
}
divisionBtn.onclick = function() {
    action = '/';
}

function computeNumbersWithAction(inp1, inp2, actionSymbol) {
    const num1 = Number(inp1.value);
    const num2 = Number(inp2.value);

    return actionSymbol === '+' ? num1 + num2 :
           actionSymbol === '-' ? num1 - num2 :
           actionSymbol === '/' && num2 !== 0 ? num1 / num2 : // проверка деления на 0
           actionSymbol === '*' ? num1 * num2 :
           null; // или выбрасываете ошибку или возвращаете undefined
}

submitBtn.onclick = function () {
    const result = computeNumbersWithAction(input1, input2, action);
    printResult(result)
}