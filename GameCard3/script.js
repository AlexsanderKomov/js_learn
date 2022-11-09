(function () {
  let arrayItem = [];
  const arrayNumber = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
  let activeNumder = [];
  let countCardSuccess = [];

  const form = document.querySelector('.form');
  const input = document.querySelector('.form__input');
  const btn = document.querySelector('.form__btn');
  const gameList = document.querySelector('.list');

  input.addEventListener('input', function () {
    if (!input.value) {
      btn.disabled = true;
    } else {
      btn.disabled = false;
    }
  });

  function createGameRepeat() {
    const buttonRepeat = document.createElement('button');
    buttonRepeat.classList.add('form-btn');
    buttonRepeat.textContent = 'Сыграть еще';
    buttonRepeat.className = 'button-repeat';
    buttonRepeat.style.display = 'none';

    return buttonRepeat;
  }

  // создаем предупреждение если ввели другое число
  function creareError() {
    const error = document.createElement('h3');
    error.innerHTML = 'Вы не попали в диапазон поэтому 4 в ряд по умолчанию';
    error.style.display = 'none';

    return error;
  }

  // создаем и возвращаем поле для игры
  function createGameField(obj = {}) {
    let cardItem = document.createElement('li');

    cardItem.classList.add('item');
    cardItem.textContent = obj.number;

    cardItem.addEventListener('click', function () {
      cardItem.classList.add('item-active');
    });

    return cardItem;
  }

  // перемешиваем цифры
  function fyShuffle(arr, i = 16) {
    while (--i > 0) {
      let randIndex = Math.floor(Math.random() * (i + 1));
      [arr[randIndex], arr[i]] = [arr[i], arr[randIndex]];
    }
    return arr;
  }

  // создаем массив значений для ввода значения 6
  function getArrayNumberValueSix() {
    const arrayNumberValueSix = arrayNumber
      .concat(arrayNumber)
      .concat(arrayNumber)
      .slice(0, 36);

    // Вариант посложнее
    // const arrayNumberValueSix = arrayNumber
    //   .join('')
    //   .repeat(3)
    //   .slice(0, 36)
    //   .split('')
    //   .map((n) => +n);

    return arrayNumberValueSix;
  }

  // создаем массив значений для ввода значения 8
  function getArrayNumberValueEight() {
    const arrayNumberValueEight = arrayNumber
      .concat(arrayNumber)
      .concat(arrayNumber)
      .concat(arrayNumber);

    return arrayNumberValueEight;
  }

  // создаем массив значений для ввода значения 10
  function getArrayNumberValueTen() {
    const arrayNumberValueTen = arrayNumber
      .concat(arrayNumber)
      .concat(arrayNumber)
      .concat(arrayNumber)
      .concat(arrayNumber)
      .concat(arrayNumber)
      .slice(0, 100);

    return arrayNumberValueTen;
  }

  function createGameApp(container) {
    const gameItem = createGameField;
    const gameErrorValue = creareError();
    const gameRepeat = createGameRepeat();
    const arrayNumberValueSix = getArrayNumberValueSix();
    const arrayNumberValueEight = getArrayNumberValueEight();
    const arrayNumberValueTen = getArrayNumberValueTen();

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      form.remove();
      // игнорируем создание элемента, если пользователь ничего не ввел в поле
      if (!input.value) {
        return;
      }

      let newItem = {
        number: null,
        open: false,
        success: false,
      };

      // адаптация списка и карточек под стандартное кол-во
      if (input.value ** 2 === 16 || input.value % 2 === 1) {
        gameList.style.width = '645px';
      }
      // адаптация списка и карточек под 6 карточек в ряд
      if (input.value ** 2 === 36) {
        gameList.style.width = '990px';
      }
      // адаптация списка и карточек под 8 карточек в ряд
      if (input.value ** 2 === 64) {
        gameList.style.width = '100%';
        document
          .querySelectorAll('.item')
          .forEach(
            (el) => ((el.style.width = '132px'), (el.style.height = '174px'))
          );
      }
      // адаптация списка и карточек под 10 карточек в ряд
      if (input.value ** 2 === 100) {
        gameList.style.width = '100%';
        document
          .querySelectorAll('.item')
          .forEach(
            (el) => ((el.style.width = '103px'), (el.style.height = '136px'))
          );
      }
    });
  }

  window.createGameApp = createGameApp;
})();
