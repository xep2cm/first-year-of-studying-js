// const person = {
//     name: 'Alex',
//     age: 55,
//     greet: function() {
//         console.log('Greet!')
//     }
// }

const person = new Object({
    name: 'Alex',
    age: 55,
    greet: function() {
        console.log('Greet!')
    }
})

Object.prototype.sayHello = function() {
    console.log('hello')
}

const lena = Object.create(person) 
lena.name ='Elena'
lena.age = 14

const str = "I am string"

// prototype - это некий объкт, с помощью которого мы расширяем свойства объектов или классов. с помощью него мы может выстраивать наследственность в js