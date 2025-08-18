// Theory | массивы и объкты

// Массивы 
// Массив - просто контейнер, который хранит в себе другие переменные.


const array = [1, 2, 3]
// const arrayStrings = ['a','b','c','d', null, undefined, 52]
// const array = new Array(1, 2, 3, 4, 500, 700)

// console.log(array.length) - посмотреть, какая длина массива
// console.log(array[позиция элемента, индекс первого числа весгда начинается с нуля])
// console.log(array[10]) - будет undefined
// console.log(array[array.length -1])  - поечему -1? потому что мы основываемся на длине масссива, какой бы длины он не был
// array[0] = 'Privet' console.log(array) - заменит нулевой массив на слово
// array[array.length] = 'becon' console.log(array)


//  Методы массивов
const names = ['Vlad', 'Igor', 'Elena', 'Csenia']

// names.push('Alex', 'Andrey') - правильный варинт, чтобы положить объект в массив, но в конец
// names.unshift('Alex')
/** Методы пуш и аншифт отличаются по скорости работы, метод пуш работает быстрей, потому что ему нужно меньше времени на вычисление*/
// const firstName = names.shift('') - удаляет первый элемент из массива
// const name = names.pop() - удаляет последний элемент, вытаскивает из массива, добавляет его в отдельную переменную
// console.log(names)
// console.log(names. reverse()) - мутирует изначальный массив
// console.log(names.toReversed()) -  возвращает новый массив и при этом не меняет оригинал
// console.log(letters.sort()) - сортирует положение в алф порядке, мутирует массив
// return b.charCodeAt(0) - a.charCodeAt(0)
// return a.charCodeAt(0) - b.charCodeAt(0) 
// console.log(letters.toSorted()) - новый метод
// .splice - принимает в себя индекс того элемента, который хотим видить или с того, с которого хотим начать
// .toSpliced - новый метод, не мутирующий массив

// const greateWoman = 'Elena'
// const index = names.indexOf(greateWoman)
// console.log(index)
// const newNames = names.with(index, 'Elena Velikaia')
// // console.log(names)
// // console.log(newNames)
// // names[index] = 'Elena Velikaia'
// // console.log(names[index])

// names.map(function(name) {
//     const newName = name + '!'
// })
// console.log(names)

// const capitalNames = names.map(function(name, index) {
//     // const newName = name + '!'
//     // return newName
//     // return name.toUpperCase()
//     if (index === 1) {
//         return "ELena Velikaia"
//     }
//     return name
// })
// console.log(capitalNames)

// console.log(names.includes('Igor'))
// console.log(names.indexOf('Igor') !== -1)

const people = [
    {name: 'Vlad', budget: 4200},
    {name: 'Elena', budget: 1200},
    {name: 'Igor', budget: 3200},
    {name: 'Csenia', budget: 85200}
]

// console.log(people.indexOf({name: 'Vlad', budget: 4200}))
// let findedPerson 
// for (let person of people) {
//     if (person.budget === 4200) {
//         findedPerson = person
//     }
// }
// console.log(findedPerson)


// const findedPerson = people.find(function(person) {
//     return person.budget === 4200;
//     if (person.budget === 4200) {
//         return true
//     }
// })

// const finded = people.find((p) => p.budget === 4200)

// const finded = people.findIndex(function(person) {
//     return person.budget === 4300;
    
// })
// console.log(finded)

// const filter = people.filter(function(p) {
//     return p.budget > 4000
// })
// console.log(filter)

// let sumBud = 0
// const filter = people.filter(function(p) {
//     return p.budget > 4000
// })
// console.log(filter)
// filter.forEach(function(p) {
//     sumBud = sumBud + p.budget
// })
// console.log(sumBud)

// const sumBud = people
//     .filter((p) => p.budget > 5000)
//     .map((p) => p.budget)
//     .reduce((acc, p) => acc + p, 0)
// console.log(sumBud)

// const string = 'hello'
// const reversed = string.split('').toReversed().join('/').split((c) => c !==='!')
// console.log(reversed)




/** 
 * Объекты


const person = {
    firstName: 'Alex',
    lastName: 'Figma',
    year: 2000,
    hasGirlFriend: false,
    languages: ['ru', 'en', 'de'],
    getFullName: function() {
        console.log(person.firstName + ' ' + person.lastName)
    },
}

console.log(person.getFullName())
console.log(person.year)
console.log(person['languages'])

const key = 'hasGirlFriend'
console.log(person[key])

person.hasGirlFriend = true
console.log(person[key])

person.getFullName()
 */

