// задание 1
// let n = 0;
// let m = -100;
// let count = 100;

// let array = [];
// let range = Math.abs(n - m);
// let min = Math.min(n, m);
// let max = Math.max(n, m);

// цикл 1
// for (let i = 0; i < count; i++) {
//   array.push(Math.round(Math.random() * range + min));
// }

// цикл 2

// while (count > 0) {
//   array.push(Math.round(Math.random() * range + min));
//   count--;
// }

// console.log(array);

// задание 2

// let str = 'Привет мир!';

// let newStr = [];

// for (let i = str.length - 1; i >= 0; i--) {
//   newStr.push(str[i]);
// }

// console.log(newStr.join(''));

// задание 3

// let roadMines = [true, true, true, true, true, true, true, true, true, true];

// let lifeTank = 2;

// for (let i = 0; i < roadMines.length; i++) {
//   if (roadMines[i] === true) {
//     lifeTank -= 1;
//     if (lifeTank === 1) {
//       console.log('танк повреждён');
//       console.log(`танк переместился на ${i + 1}`);
//     } else if (lifeTank === 0) {
//       console.log(`танк переместился на ${i + 1}`);
//       console.log('танк уничтожен');
//       break;
//     }
//   } else {
//     console.log(`танк переместился на ${i + 1}`);
//   }
// }

// задание 4

let week = [
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота',
  'Воскресенье',
];
let weekOrder = [];
let month = [];
let lastDay = 31;
let firstWeekDay = 'Пятница';

let indexWeek = week.indexOf(firstWeekDay);
for (let i = firstWeekDay; i <= week.length; i++) {
  let index = i % 7;
  weekOrder.push(week[index]);
}

console.log(weekOrder);
for (let i = 1; i <= lastDay; i++) {
  month.push(i);
}

for (let num = 1; num <= month.length; num++) {}

for (let el of week) {
}
