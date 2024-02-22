// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log

let v1 = 'hello'
let v2 = 'owu'
let v3 = 'com'
let v4 = 'ua'
let v5 = 1
let v6 = 10
let v7 = -999
let v8 = 123
let v9 = 3.14
let v10 = 2.7
let v11 = 16
let v12 = true
let v13 = false

console.log(v1)
console.log(v2)
console.log(v3)
console.log(v4)
console.log(v5)
console.log(v6)
console.log(v7)
console.log(v8)
console.log(v9)
console.log(v10)
console.log(v11)
console.log(v12)
console.log(v13)

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)

let firstName = 'Nataliiya'
let middleName = 'Yriivna'
let lastName = 'Kharitonova'
let person = firstName + middleName + lastName

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
// let a = 100; let b = '100'; let c = true;

let a = 100
let b = '100'
let c = true

console.log(typeof a)
console.log(typeof b)
console.log(typeof c)

// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль

let name = prompt("Ваше ім'я")
let midName = prompt("Ваше по батькові")
let age = prompt("Скільки вам років?")

console.log(name)
console.log(midName)
console.log(age)