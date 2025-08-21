// function hello() {
//     console.log('Hello', this)
// }

// const person = {
//     name: 'Vladelen',
//     age: 25,
//     job: 'ff',
//     sayHello: hello,
//     sayHelloWindow: hello.bind(this),
//     logInfo: function(job, phone) {
//         console.group(`${this.name} info: `)  
//         console.log(`Name is ${this.name}`)
//         console.log(`Age is ${this.age}`)
//         console.log(`Job is ${job}`)
//         console.log(`Phone is ${phone}`)
//         console.groupEnd()
//     }
// }

// const lena = {
//     name: 'Elena',
//     age: 22,
// }

// person.logInfo.bind(lena, 'Frontend', '+7933229253')() - метод bind возвращает новую функцию и мы можем её вызвать, когда нам будет удобно
// person.logInfo.call(lena, 'Frontend', '+7933229253') - метод call вызывает её сразу
// person.logInfo.apply(lena, ['Frontend', '+7933229253']) - от call отличается тем, что аргументы передаются массивом


// ===== Пpактика =====

// const array = [1,2,3,4,5]
// function multBy(array, n) {
//     return arr.map(function(i) {
//         return i * n
//     })
// }
// console.log(multBy(array, 200))

// Array.prototype.multBy = function(n) {
//     return this.map(function(i) {
//         return i * n
//     })
// } 
// console.log(array.multBy(20))


function bind(context, fn) {
    return function(...args) {
        fn.apply(context, args)
    }
}

function logPerson() {
    console.log(`Person: 
        ${this.name}, 
        ${this.age}, 
        ${this.job}
                `)
}

const person1 = {
    name: 'Mixail',
    age: 22,
    job: 'Front'
}

const person2 = {
    name: 'Elena',
    age: 20,
    job: 'Front2'
}

bind(person1, logPerson)()
bind(person2, logPerson)()