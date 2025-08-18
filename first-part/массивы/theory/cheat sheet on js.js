// 📃 ШПАРГАЛКА ПО JAVASCRIPT: МАССИВЫ, ОБЪЕКТЫ, MATH 📚

// ========== МАССИВЫ (ARRAYS) ===========

// Простое объявление массива
const colors = ['красный', 'зеленый', 'синий'];

// Получаем длину массива
console.log(colors.length); // 3

// Доступ к элементам массива
console.log(colors[0]); // красный
colors[1] = 'оранжевый'; // меняется второй элемент

// Методы для изменения массива
colors.push('фиолетовый'); // добавляем элемент в конец
colors.unshift('белый'); // добавляем элемент в начало
colors.pop(); // извлекаем последний элемент
colors.shift(); // извлекаем первый элемент

// Полезные методы
console.log(colors.includes('красный')); // проверяет наличие элемента
console.log(colors.join(', ')); // преобразуем массив в строку

// Сортируем массив
colors.sort(); // сортируется лексически

// Применение функций к каждому элементу
const squaredNums = [1, 2, 3].map(n => n*n); // возвести в квадрат каждый элемент

// Поиск минимального/максимального элемента
const minMax = [10, 20, 30];
console.log(Math.min(...minMax), Math.max(...minMax));

// =============== ОБЪЕКТЫ (OBJECTS) ====================

// Простое объявление объекта
const person = {
    name: 'Анна',
    age: 25,
    skills: ['JS', 'Python'],
    sayHi: function() {
        console.log(`Привет, меня зовут ${this.name}`);
    }
};

// Обращение к полю объекта
console.log(person.name); // Анна
console.log(person.skills); // ['JS', 'Python']

// Добавляем поле динамически
person.job = 'разработчик';

// Проверяем наличие поля
if ('job' in person) {
    console.log('У неё есть работа');
}

// Удаляем поле
delete person.job;

// Используем методы объекта
person.sayHi(); // Привет, меня зовут Анна

// Полезные утилиты для работы с объектами
console.log(Object.keys(person)); // выводит ключи объекта
console.log(Object.values(person)); // выводит значения полей
console.log(Object.entries(person)); // возвращает массив пар ключ-значение

// Скопируем объект (поверхностное копирование)
const copiedPerson = {...person};

// ======== ОБЪЕКТ MATH (математические операции) ========

// Конкретные примеры использования объекта Math
console.log(Math.PI); // постоянная пи (π)
console.log(Math.random()); // случайное число от 0 до 1
console.log(Math.abs(-10)); // абсолютное значение числа
console.log(Math.round(3.7)); // округление числа до ближайшего целого
console.log(Math.max(10, 20, 30)); // максимальное число
console.log(Math.sqrt(16)); // квадратный корень

// Генерация случайного целого числа от 1 до 10
const randInt = Math.floor(Math.random() * 10) + 1;
console.log(randInt);

// Завершение примера
console.log('Шпаргалка готова!');