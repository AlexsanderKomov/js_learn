// создаем элемент
document.createElement('div');

let h1 = document.createElement('h1');
// добавляем контент
h1.textContent = 'Список покупок';
// добавляем элемент на страницу
document.body.append(h1);

let ol = document.createElement('ol');
document.body.append(ol);

// создаем item списка ol
let list = [
  document.createElement('li'),
  document.createElement('li'),
  document.createElement('li'),
];

// добавляем контент каждому item
list[0].textContent = 'Циркулярная пила';
list[1].textContent = 'Молоко';
list[2].textContent = 'Хлеб';

// добавляем item вначало list
ol.prepend(list[0]);
ol.prepend(list[1]);
ol.prepend(list[2]);

let eggs = document.createElement('li');
eggs.textContent = 'Яйца';

// добавляем item после Молока
list[1].before(eggs);

let sausage = document.createElement('li');
sausage.textContent = 'Колбаса';

// добавляем item перед Хлебом
list[2].after(sausage);

let breadBought = document.createElement('li');
breadBought.innerHTML = '<strike>Хлеб</strike>';
// меняет контент
ol.children[0].replaceWith(breadBought);

// удаляем элемент Циркулярная пила
ol.children[4].remove();

// добавляем индетификатор
ol.id = 'list';
// меняем цифры списка в другую сторону
ol.reversed = true;

// устонавливаем с какой цифры начинается список
ol.start = 20;

// удаляем атрибут
ol.removeAttribute('start');

// добавлям класс
ol.classList.add('class-1');

// удаляем класс
ol.classList.remove('class-1');

// переключаем класс
ol.classList.toggle('class-1');

// проверка на содержание класса
ol.classList.contains('class-1');

function onClick() {
  console.log('Вы нажали на кнопку');
}

let btn = document.querySelector('.btn');

btn.addEventListener('click', onClick);

// let countDisplay = document.querySelector('.count-display');
// let incrementBytton = document.querySelector('.increment-button');

// function incrementCount() {
//   let currentCount = parseInt(countDisplay.textContent);
//   countDisplay.textContent = currentCount + 1;
// }

// incrementBytton.addEventListener('click', incrementCount);

document.addEventListener('DOMContentLoaded', function () {
  let countDisplay = document.querySelector('.count-display');
  let incrementBytton = document.querySelector('.increment-button');

  function incrementCount() {
    let currentCount = parseInt(countDisplay.textContent);
    countDisplay.textContent = currentCount + 1;
  }

  incrementBytton.addEventListener('click', incrementCount);
});

document.addEventListener('DOMContentLoaded', function () {
  let colorInput = document.querySelector('.color-input');
  let colorBlock = document.querySelector('.color-block');
  let clearButton = document.querySelector('.clear-button');

  function paintBlock() {
    colorBlock.style.backgroundColor = colorInput.value;
  }

  colorInput.addEventListener('input', paintBlock);

  paintBlock();

  clearButton.addEventListener('click', function () {
    colorBlock.style.removeProperty('background-color');
    colorInput.value = '';
  });
});
