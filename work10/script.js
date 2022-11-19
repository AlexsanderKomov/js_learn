const array = [];

array.push('в конец');
array.unshift('в начало');

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// метод удаляет из массива первый элемент и сразу же возвращает его
const first = numbers.shift();
console.log(first);
console.log(numbers);
