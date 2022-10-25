// пример с дискриминантом
let d = 10;

if (d > 0) {
  // вычисляем х1 и х2
} else if (d === 0) {
} else {
}

// switch

let fruit = 'Яблоко';

switch (fruit) {
  case 'Яболоко':
    console.log('Перед нами яблоко');
    break;
  case 'Арбуз':
  case 'Вишня':
  case 'Клубника':
    console.log('Это ягода, а не фрукт');
    break;
  default:
    console.log('Не знаю такого фрукта');
    break;
}
