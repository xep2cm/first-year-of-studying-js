const now = new Date()

const start = new Date(1000 * 60 * 60 * 24 * 365)

const dte = new Date(2025, 7, 15, 12, 16, 15)

console.log(dte)
console.log(now.getFullYear())
console.log(now.getMonth())
console.log(now.getDate())
console.log(now.getHours())

console.log(now.toDateString())
console.log(now.toTimeString())
console.log(now.toLocaleDateString())
console.log(now.toTimeString())