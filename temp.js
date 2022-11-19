// const array = [];

// array.push('в конец');
// array.unshift('в начало');

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

// метод удаляет из массива первый элемент и сразу же возвращает его
// const first = numbers.shift();
// console.log(first);
// console.log(numbers);

// похожий метод, который удаляет и возвращает последний элемент массива
// const last = numbers.pop();
// console.log(last);
// console.log(numbers);

// while (numbers.length) {
//   // на каждой итерации цикла массив "худеет" на один элемент
//   console.log(`Another one bites the dust: ${numbers.pop()}`);
// }

// const middle = numbers.splice(4, 2); // 4 с какого индекса, 2 какое кол-во элементов
// console.log(middle); // 4, 5
// console.log(numbers); // 0, 1, 2, 3, [отсюда мы убрали 2 элемента] 6, 7 ...

// numbers.splice(6); // [8, 9] вернутся и будут убраны из массива
// console.log(numbers); // 0, 1, 2, 3, 6, 7

// numbers.splice(4, 0, 4, 5); // 4, 5 элементы которые мы хотим добавить
// console.log(numbers); // 0, 1, 2, 3, 4, 5, 6, 7

// const numberReversed = numbers.reverse();
// console.log(numberReversed);

// numberReversed.sort(); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// numberReversed.push(10, 11);
// numberReversed.sort(); // [0, 1, 10, 11, 2, 3, 4, 5, 6, 7, 8, 9]

// numberReversed.sort((a, b) => a - b);
// numberReversed.sort((a, b) => b - a);
// console.log(numberReversed);

// numbers.slice(); // полная копия массива
// numbers.slice(3); // копия от элемента с индексом 3 и до конца
// numbers.slice(-5); // копия 5-ти последних элементов (5, 6 ... 9)
// numbers.slice(3, 5); // копия от индекса 3 до индекса 5, последний не включается (3, 4)
// numbers.slice(2, -2); // копия от индекса 3 до пред-предпоследнего элемента (2-7)
// numbers.slice(100, 150); // пустой массив, в исходном нет таких индексов

// numbers.includes(100); // false
// numbers.includes(8); // true
// numbers.indexOf(100); // -1
// numbers.indexOf(0); // 0, индекс ПЕРВОГО значения 0 в массиве
// numbers.lastIndexOf(0); // 10, индекс ПОСЛЕДНЕГО значения 0 в массиве

const students = [
  { name: 'Василий', age: 18 },
  { name: 'Генадий', age: 23 },
  { name: 'Андрей', age: 17 },
  { name: 'Тимофей', age: 29 },
  { name: 'Иннокентий', age: 17 },
];

students.includes({ name: 'Василий', age: 18 }); // false, так как это не тот Василий
students.find((student) => student.name === 'Василий' && student.age === 18);
// объект студента { name: 'Василий', age: 18 }
students.findIndex(
  (student) => student.name === 'Василий' && student.age === 18
);
// индекс студенда, то есть 0

students.find((student) => student.age <= 16); // undefined, таких студентов нет
students.findIndex((student) => student.age <= 16); // -1

students.every((student) => student.age < 30); // true, все студенты младше 30 лет
students.every((student) => student.age >= 30); // false, есть несовершеннолетние

students.some((student) => student.age < 18); // true, есть несовершеннолетние
students.some((student) => student.name === 'Иван'); // false, ни одного Ивана

// только несовершеннолетние студенты
const kids = students.filter((student) => student.age < 18);
/*
[
  { name: 'Андрей', age: 17},
  { name: 'Иннокентий', age: 17},
]
*/

// все, кроме Андреев
const notAndrey = students.filter((student) => student.name !== 'Андрей');
/*
[
  { name: 'Василий', age: 18 },
  { name: 'Генадий', age: 23 },
  { name: 'Тимофей', age: 29 },
  { name: 'Иннокентий', age: 17 },
]
*/

// students.map((student) => student.name); // Василий, Генадий, Андрей ...

// Товары в корзине
const cartItems = [
  { name: 'Гречка 500 гр', price: 50, quantity: 3 },
  { name: 'Сок яблочный', price: 100, quantity: 1 },
  { name: 'Перфоратор', price: 8000, quantity: 2 },
];

// Посчитаем сумму к оплате
cartItems.reduce(
  // 1-й аргумент - ф-ция. В ее первым аргументов передается уже "накопленное" значение,
  // а вторым - очередной элемент массива
  (total, item) => total + item.price * item.quantity,
  // 2-й аргумент - начальное значение для total
  0
);

// Чтобы стало понятнее, давайте посмотрим на то, как будет выглядеть вычисление без reduce

// начальное значение
let total = 0;

for (const item of cartItems) {
  // и тут тот же самый код, который мы передали в функции в reduce
  total = total + item.price * item.quantity;
}

students.forEach((student, index) => {
  console.log(`Студент №${index + 1}: ${student.name}`);
});

// то же самое с помощью циклов
for (const index in students) {
  const student = students[index];
  console.log(`Студент №${Number(index) + 1}: ${student.name}`);
}
