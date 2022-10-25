/* 
Вычисдяем оасстояние между двумя точками
Даны координаты x, y 2-х точек. Нужно вывести расстояние между ними.
Вычисляем по теореме Пифагора.
*/

let x1 = 10;
let y1 = 2;

let x2 = -3;
let y2 = 3;

let cathetus1 = Math.abs(x1 - x2);
let cathetus2 = Math.abs(y1 - y2);

console.log(Math.sqrt(Math.pow(cathetus1, 2) + Math.pow(cathetus2, 2)));

/*
Сравниваем 2 дробных числа с указанной точностью.
Даны 2 числа и кол-во после запятой, которое необходимо учитывать.
Вывести информацию, равны ли эти числа, больше ли первое число или меньше второго.
*/

let first = 0.1 + 0.2 + 0.033;
let second = 0.33334;
let precision = 3;

let firstNormalized = Math.round(first * Math.pow(10, precision));
let secondNormalized = Math.round(second * Math.pow(10, precision));

console.log('Исходные числа равны', first === second);
console.log('Числа равны', firstNormalized === secondNormalized);
console.log('Первое число больше', firstNormalized > secondNormalized);
console.log('Первое число меньше', firstNormalized < secondNormalized);

/*
Генератор случайных целых чисел между n до m.
Учесть, что n необязательно меньше, чем m!
*/

let n = -100;
let m = 350;

// кол-во цифр, кльлоые млшуь юыьб сгенерированы
let range = Math.abs(m - n);
// округленное число от 0 до range
let numderInRange = Math.round(Math.random() * range);
// левая границы возможного числа
let min = Math.min(n, m);

console.log(min + numderInRange);

/*
Выводим отдельно целую и дробную части числа с точность n.
*/

let number = 0x12f + 0.3 + 0.1;

console.log('Исходное число', numder);

console.log('Целая часть', Math.floor(number));
// остаток от деления на 1 возврашает дробную часть
console.log(
  'Дробная часть',
  Math.round((number % 1) * Math.pow(10, precision))
);
