// const users = [
//     { id: 1, name: 'Алексей', age: 27 },
//     { id: 2, name: 'Ирина', age: 32 },
//     { id: 3, name: 'Михаил', age: 19 },
// ];

// // Функция принимает массив объектов и возвращает имена тех,
// // чей возраст больше 20 лет
// function getNamesOfAdults(usersArray) {
//     return usersArray.filter(user => user.age > 20).map(user => user.name);
// }

// console.log(getNamesOfAdults(users)); // ["Алексей", "Ирина"]





// const employees = [
//     { id: 1, name: 'Сергей Иванов', department: 'IT' },
//     { id: 2, name: 'Анна Смирнова', department: 'HR' },
//     { id: 3, name: 'Евгений Кузнецов', department: 'Sales' },
//     { id: 4, name: 'Ольга Петрова', department: 'IT' },
//     { id: 5, name: 'Дмитрий Сергеев', department: 'HR' },
// ];

// function getEmployeesByDepartment(employees, dept) {
//     return employees
//         .filter(employee => employee.department === dept) // Отбираем нужных сотрудников
//         .map(employee => employee.name);                   // Извлекаем только имена
// }

// console.log(getEmployeesByDepartment(employees, 'IT')); // ['Сергей Иванов', 'Ольга Петрова']
// console.log(getEmployeesByDepartment(employees, 'HR')); // ['Анна Смирнова', 'Дмитрий Сергеев']


// const orders = [
//     { orderId: 1, customerName: 'Иван Петров', product: 'Книги', amount: 1500 },
//     { orderId: 2, customerName: 'Мария Иванова', product: 'Электроника', amount: 25000 },
//     { orderId: 3, customerName: 'Александр Сидоров', product: 'Игрушки', amount: 3000 },
//     { orderId: 4, customerName: 'Елена Васильева', product: 'Косметика', amount: 800 },
//     { orderId: 5, customerName: 'Андрей Федоров', product: 'Спортивные товары', amount: 5000 },
// ];

// function getCustomersWithOrdersAboveThreshold(orders, minAmont) {
//     return orders.filter(order => order.amount >= minAmont).map(order => order.customerName)
// }

// console.log(getCustomersWithOrdersAboveThreshold(orders, 5000)); // Передаём массив и минимальную сумму


// const orders = [
//     { orderId: 1, customerName: 'Иван Петров', product: 'Книги', amount: 1500 },
//     { orderId: 2, customerName: 'Мария Иванова', product: 'Электроника', amount: 25000 },
//     { orderId: 3, customerName: 'Александр Сидоров', product: 'Игрушки', amount: 3000 },
//     { orderId: 4, customerName: 'Елена Васильева', product: 'Косметика', amount: 800 },
//     { orderId: 5, customerName: 'Андрей Федоров', product: 'Спортивные товары', amount: 5000 },
// ];

// function getCustomerNamesForProduct(orders, productName) {
//     return orders.filter(order => order.product === productName).map(order => order.customerName)
// }

// console.log(getCustomerNamesForProduct(orders, 'Электроника'))



// let x = prompt("Введите число")

// if (x > 0) {
//     console.log('Число ' + x + ' положительное')
// } else {
//     console.log('Число' + x + ' отрицальеное')
// }

// console.log(x)


// const isEven = (num) => return num % 2 === 0;

// let number = 10;

// if (isEven(number)) {
//     console.log(number + " является четным числом.");
// } else {
//     console.log(number + " является нечетным числом.");
// }


// const userAge = prompt('Введите ваш возраст')

// userAge = parseInt(userAge)

// if (userAge >= 18) {
//     console.log('Доступ разрешен')
// } else {
//     console.log('Доступ запрещен')
// }


// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const events = numbers.filter(function(x) {
//     return x % 2 === 0;
// })
// console.log(events)


// function createCounter() {
//   let count = 0; // Внутренняя переменная, сохраняющая состояние

//   return function() {
//     count++;       // Увеличиваем счётчик на 1
//     return count;  // Возвращаем обновлённый счётчик
//   };
// }

// // Создаем экземпляр счётчика
// const counter = createCounter();

// // Пробуем вызвать несколько раз
// console.log(counter()); // 1
// console.log(counter()); // 2
// console.log(counter()); // 3


