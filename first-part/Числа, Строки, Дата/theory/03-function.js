// === Функции ===
// Функции относотся к объектам


// Function Declaration 
// Можно вызвать функцию в начале, а объявить потом
function greet(name) {
    console.log(`Hello -- ${name}`)
}

// Function Expration -  отличается синтаксисом, те вместо того, чтобы просто создать функцию,
//                       мы сначала создаем переменную или константу.
const name = 'Alex'
const greet2 = function greet(name) {
    console.log(`2 Hello -- ${name}`)
}

greet('Vlad')
greet2('Vlad')

// Arrow Functions
function greet(name) {
    console.log(`Hello -- ${name}`)
}

const arrow = (name) => {
    console.log(`Hello -- ${name}`)
}

const arrow2 = (name) => console.log(`Hello -- ${name}`)
console.log(arrow2, 11)

function pow(num, exp) {
    return Math.pow(num, exp)
}

const pow2 = (num, exp) => Math.pow(num, exp)

console.log(pow2(4, 3))


// Default Parameters 
const sum = (a, b) => a + b
console.log(sum(2, 3))

const sum2 = (a = 40, b = a / 2) => a * b
console.log(sum2())


function sumAll(...numbers) {
    // let res = 0
    // for (let num of numbers) {
    //     res += num
    // }
    // return res

    return numbers.reduce((acc, cur) => (acc += cur), 0)
}

console.log(sumAll(1, 2, 3, 4, 5))


// Closures - функция, вкоторой есть другая функция

function createPerson(names) {
    return function(lastName) {
        console.log(names + ' ' + lastName)
    }
}

const addLastName = createPerson("Elena")
addLastName('Min')
addLastName('Pavel')
