// Задача первая

// let x1 = -5;
// let y1 = 8;
// let x2 = 10;
// let y2 = 5;

// let side1 = Math.abs(x1 - x2);
// let side2 = Math.abs(y1 - y2);

// console.log(side1 * side2);

// function s() {
//   let x1 = prompt('Введите 1 координату');
//   let y1 = prompt('Введите 2 координату');
//   let x2 = prompt('Введите 3 координату');
//   let y2 = prompt('Введите 4 координату');

//   let sideX = Math.abs(x1 - x2);
//   let sideY = Math.abs(y1 - y2);

//   alert(`Площадь равна = ` + sideX * sideY);
// }

// s();

// Задача вторая

// let a = 13.123456789;
// let b = 2.123;
// // let n = 5;

// let aNormalize = Math.floor((a % 1) * Math.pow(10, n));
// let bNormalize = Math.floor((b % 1) * Math.pow(10, n));

// console.log('Число a', aNormalize);
// console.log('Число b', bNormalize);
// console.log('Исходные числа равны', a > b);
// console.log('Числа равны', aNormalize < bNormalize);
// console.log('Первое число больше', aNormalize >= bNormalize);
// console.log('Первое число меньше', aNormalize <= bNormalize);
// console.log('Числа не равны', aNormalize !== bNormalize);

// Задача три

// let n = 85;
// let m = -100;

// // let range = Math.abs(n - m);
// let min = Math.min(n, m);
// let max = Math.max(n, m);

// let numberInRange = Math.round(Math.random() * (max - min) + min);

// console.log(numberInRange);
// console.log('max number', max);
// console.log('min number', min);

let n = 0;
let m = 100;

let range = Math.abs(n - m);
let min = Math.min(n, m);
let max = Math.max(n, m);

let numberInRange = Math.round(Math.random() * range + min);

console.log(numberInRange);
console.log('min number', min);
console.log('max number', max);
