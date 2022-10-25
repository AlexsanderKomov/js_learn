// переменная без значения
let emptyVariable;

console.log(emptyVariable); // undefined

let array = [1, 2, 3];

console.log(array[2]); // 3
console.log(array[3]); // undefined
console.log(array[100500]); // undefined
console.log(array[-1]); // undefined

// сравнение с undefined
console.log(array[-1] === undefined); // true
console.log(array[0] === undefined); // false

function emptyFunction() {}

console.log(emptyFunction()); // undefined
