/* 
Вычксляем количество квартир в доме.
Дано количество подъездов, этажей и квартир на одном этаже.
Нужно вывести количество квартир в одном подхезде и во всем доме.
*/

// кол-во подъездов
let entrances = 4;
// кол-во этажей
let floors = 9;
// кол-во квартир на этаже
let flatsPerFloor = 4;

let flatsPerEntrance = floors * flatsPerFloor;
console.log('Квартир в подъезде', flatsPerEntrance);

let flats = entrances * flatsPerEntrance;
console.log('Всего квартир в доме', flats);

/* 
Пропорции для рецепта Кровавой Мэри.
Даны пропорции ингредиентов для Кровавой Мэри и объем напитка, который нужно получить. Вычислить необходимый объем ингредиентов из этих данных.
*/

// ингркдиенты
let vodka = 50;
let tomatoJuice = 120;
let lemonJuice = 10;
let tabasco = 1;
let worcester = 1;

// желаемый объем напитка
let volume = 500;

// коэффициент для получения обхема ингредиента
let k = (vodka + tomatoJuice + lemonJuice + tabasco + worcester) / volume;

// сколько нужно водки для желаемого объема Кровааой Мэри
console.log(vodka * k);

/*
Вычисление дисеримината и решения квадратного уравнения
a*x*x + b*x + c = 0
Даны параметры a, d и c для квадратного уравнения.
Нужно вывести возможные значения x этого уравнения.
*/

let a = 3;
let b = 5;
let c = 10;

let d = b * b - 4 * a * c;

// корень дискриминанта
let dRoot = Math.sqrt(d);
console.log('x1 = ', (-b + dRoot) / (2 * a));
console.log('x2 = ', (-b - dRoot) / (2 * a));

/*
Вычисляем n чисел ряда Фибоначчи.
Каждое следущее число - сумма двух предыдущих.
*/

let n = 10;

let current = 0;
let prev = 1;
let prevPrev = 0;

while (n-- > 0) {
  prevPrev = prev;
  prev = current;
  current += prevPrev;
  console.log(current);
}
