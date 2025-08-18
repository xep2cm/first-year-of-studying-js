// /* Can do
//     let $ = 'test';
//     let $num = 42;
//     let num$ = 42;
//     let _ = 42;
//     let _num = 42;
//     let num_ = 42;
//     let first_name = 'Elena'; // не правильно
//     let firstName = 'Elena' // правильно
// */

// /* Restricted 
//     let  42num = '11';
//     let my-num = 1;
//     let const = 'const';
// */

// // consloe.log(resultElement.textContent)
// // resultElement = (42 / 2) / num

// const resultElement = document.getElementById('result'); 
// const input1 = document.getElementById('input1');
// const input2 = document.getElementById('input2'); 
// const submitBtn = document.getElementById('submit');
// const plusBtn = document.getElementById('plus');
// const minusBtn = document.getElementById('minus');
// let action = '+';

// const sum = Number(input1.value) + Number(input2.value);
// resultElement.textContent = sum;
// // console.log(typeof sum)

// function printResult(result) {
//     if (result < 0 ) {
//         resultElement.style.color = 'red';
//     } else {
//         resultElement.style.color = "green";
//     }
//     resultElement.textContent = result.toString();
// }

// plusBtn.onclick = function () {
//     action = '+';
// }
// minusBtn.onclick = function () {
//     action = '-';
// }

// // function printResult () {
// //     if (result < 0 ) {
// //         resultElement.style.color = 'red';
// //     } else {
// //         resultElement.style.color = "green";
// //     }
// //     resultElement.textContent = result;
// // }

// function computeNumbersWitAction(inp1, inp2, actionSymbol) {
//     const num1 = Number(inp1.value);
//     const num2 = Number(inp2.value);
//         // if (actionSymbol == '+') {
//         //     return num1 + num2;
//         // }

//         // if (actionSymbol == '-') {
//         //     return num1- num2;
//         // }
//         return actionSymbol == '+' ? num1 +num2 : num1 - num2;
// }

// submitBtn.onclick = function () {
//     const result = computeNumbersWitAction(input1, input2, action);
//     printResult(result)

//     // if (action == '+') {
//     //     const sum = Number(input1.value) + Number(input2.value);
//     //     printResult(sum)
//     // } else if (action == '-') {
//     //     const sum = Number(input1.value) - Number(input2.value);
//     //     printResult(sum)
//     // }
// }

