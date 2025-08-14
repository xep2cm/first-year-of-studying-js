// === Строки ===

const name = 'Vlad'
const age = 19

// const old = 'Hello my name is ' + name + 'and my age is ' + age 
// const output = `Hello my name is ${name} and my age is ${age}`
// console.log(output)

console.log(name.length) // количество букв 
console.log(name.toUpperCase()) // Верхний регистр
console.log(name.toLowerCase()) // Нижний регистр 
console.log(name.charAt(2)) // Показывает на какая буква на этом индексе
console.log(name.indexOf('a')) // Показывает на каком индексе нужный элемент
console.log(name.startsWith('Vl')) // Првоеряет с чего начинается строчка, возвращает правду или ложь
console.log(name.endsWith('VL')) // Првоеряет чем заканчивается строчка, возвращает правду или ложь
console.log(name.repeat(22)) // Позволяет продублировать строчку несколько раз


const pass = '   my  super  pas   '
console.log(pass.trim()) // Убиранет пробелы