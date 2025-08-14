//  Числа 

/**
const a = 100;          // integer
const b = 10.5;         // float
const c = 10e3;         // pow
const d = 1_000_000;    // _
const f = -10           // negative

const w = 23 / undefined

console.log(Number.MAX_SAFE_INTEGER) // -самое большое, безопасное число
console.log(Number.MIN_SAFE_INTEGER) // -самое минимальное, безопасное число
console.log(Math) // - глобальный объект
console.log(Math.pow(2, 53) - 1) // - возводим в степень, какое-то число 
console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)
console.log(Number.POSITIVE_INFINITY) // - бесконечное положительное число
console.log(Number.NEGATIVE_INFINITY) // - бесконечное отрицательное число
console.log(1 / 0)
console.log(Number.isFinite(1 / 0))
console.log(Number.isNaN(w))
console.log(Number.isNaN(12))
==================================== */

// Перевод из строки в числа
const strInt = '42'
const strFloat = '42.42'

console.log(Number(strInt))
console.log(Number(strFloat))

console.log(Number.parseInt(strInt))
console.log(Number.parseFloat(strFloat))

console.log(parseInt(strInt))
console.log(parseFloat(strFloat))

console.log(+strInt, +strFloat)

// Методы округления
console.log((0.1 + 0.2).toFixed(1))
console.log(+(0.1 + 0.2).toFixed(1))
console.log(parseFloat((0.1 + 0.2).toFixed(1)))


// BigInt - отдельный тип данных, позволящий работать с реально большими числами
console.log(BigInt(Number.MAX_SAFE_INTEGER))
console.log(BigInt(Number.MIN_SAFE_INTEGER))

const big = 42n
console.log(typeof(big))

/**
    Ограничения: 
    1. BigInt может работать только с BigInt
        console.log(42n - 4) - error
    2. Он не может быть плавающим. 
        console.log(42.42n) - error, только целые значения
    3. BigInt - целочисленный тип, он может работать только с целыми числами
 */

console.log(parseInt(10n) - 4) 
// ИЛИ
console.log(10n - BigInt(4))

