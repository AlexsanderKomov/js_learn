// let fruits = [
//   'Яблоко',
//   'Банан',
//   'Апельсин',
//   'Ананас',
//   'Дыня',
//   'Маракуя',
//   'Помела',
// ];

// console.log('Сегодня я съел:');

// for (let fruit of fruits) {
//   console.log(fruit);
// }

let rating = ['Саша', 'Вика', 'Валера', 'Лила', 'Вика', 'Кутя', 'Гомунгул'];

console.log('Рейтинг студентов:');

for (let i in rating) {
  console.log(`${parseInt(i) + 1} место: ${rating[i]}`);
}
