// // Удаление повторяюихся значений в массиве

// const arr = [1, 2, 3, 2, 4, 1, 5, 3]
// const uniq = new Set(arr)

// console.log(
//     Array.from(uniq)
// )
// console.log([...uniq])


// let name = 'Ivan'
// let age = 28
// const isStudent = false

// if (isStudent) {
//     console.log(`Привет! Меня зовут ${name}, мне ${age} лет и я студент.`)
// } else {
//     console.log(`Привет! Меня зовут ${name}, мне ${age} лет и я не студент.`)
// }

// let a = 5
// let b = 7
// const sum = a + b

// console.log("сумма равна: ${sum}")

// let x = 10
// let y = 'hello'
// let z = true

// console.log('Переменная x является числом и её значение равно: ',x)
// console.log('Переменная y является строкой и её значение равно: ',y)
// console.log('Переменная z является булевым значением и её значение: ',z)

// (() => {
//     const userName = prompt('Введите ваше имя');
//     const userAge = prompt('Введите ваш возраст');
    
//     if (userName && userName.trim() !== '' && userAge && !isNaN(parseInt(userAge))) {
//         console.log(`Привет, ${userName}. Тебе ${userAge} лет.`);
//     }
// })();


// // Запрашиваем длину и ширину у пользователя
// const length = prompt('Введите длину стороны А:');
// const width = prompt('Введите ширину стороны B:');

// // Преобразуем введённые значения в числа
// const numLength = parseFloat(length);
// const numWidth = parseFloat(width);

// if (!isNaN(numLength) && !isNaN(numWidth)) {
//     // Вычисляем площадь прямоугольника
//     const area = numLength * numWidth;
//     console.log(`Площадь прямоугольника равна ${area} квадратных единиц.`);
// } else {
//     console.error('Ошибка: введено некорректное значение.');
// }

// const users = [
//     { name: 'Иван', age: 25, city: 'Москва' },
//     { name: 'Анна', age: 30, city: 'Санкт-Петербург' },
//     { name: 'Сергей', age: 22, city: 'Москва' },
//     { name: 'Елена', age: 28, city: 'Новосибирск' },
// ];

// function filterByCity(usersArray, targetCity) {
//     return usersArray.filter(user => user.city === targetCity);
// }

// console.log(filterByCity(users, 'Москва'));

// const employees = [
//     { name: 'Алексей Иванов', role: 'Developer', salary: 120_000 },
//     { name: 'Ольга Смирнова', role: 'Manager', salary: 100_000 },
//     { name: 'Дмитрий Петров', role: 'Developer', salary: 150_000 },
//     { name: 'Светлана Кузнецова', role: 'Designer', salary: 90_000 },
//     { name: 'Андрей Сергеев', role: 'Developer', salary: 110_000 },
// ];

// function finAndSortDev(employeesArray) {
//     const developers = employees.filter(employee => employee.role === 'Developer');
//     developers.sort((a, b) => b.salary - a.salary);

//     return developers;
// }

// const result = finAndSortDev(employees);
// console.log(result);

// // Корректная версия функции проверки четности
// const isEven = (num) => num % 2 === 0;

// let number = 10;
// if (isEven(number)) {
//     console.log(`${number} является четным числом.`);
// } else {
//     console.log(`${number} является нечетным числом.`);
// }