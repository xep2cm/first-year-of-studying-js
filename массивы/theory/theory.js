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

/** 
 * Объекты
 */

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