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
  function createGameField(number) {
    let cardItem = document.createElement('li');

    cardItem.classList.add('item');

    cardItem.textContent = number;

    // тут видит
    cardItem.addEventListener('click', function () {
      cardItem.classList.add('item-active');
      activeNumder.push(cardItem);
      console.log(activeNumder);
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
    let arrayNumberValueSix = arrayNumber
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
    let arrayNumberValueEight = arrayNumber
      .concat(arrayNumber)
      .concat(arrayNumber)
      .concat(arrayNumber);

    return arrayNumberValueEight;
  }

  // создаем массив значений для ввода значения 10
  function getArrayNumberValueTen() {
    let arrayNumberValueTen = arrayNumber
      .concat(arrayNumber)
      .concat(arrayNumber)
      .concat(arrayNumber)
      .concat(arrayNumber)
      .concat(arrayNumber)
      .slice(0, 100);

    return arrayNumberValueTen;
  }

  function createGameApp(container) {
    let gameItem = createGameField();
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

      // корректное заполнение значением карточек если ввели 4
      if (input.value > 10 || input.value <= 4) {
        fyShuffle(arrayNumber, input.value ** 2);

        for (let i = 0; i < input.value ** 2; i++) {
          arrayItem.push(createGameField(arrayNumber[i]));
          gameList.append(createGameField(arrayNumber[i]));
        }
      }

      // корректное заполнение значением карточек если ввели 6
      if (input.value % 2 === 0 && input.value == 6) {
        fyShuffle(arrayNumberValueSix, input.value ** 2);

        for (let i = 0; i < arrayNumberValueSix.length; i++) {
          arrayItem.push(createGameField(arrayNumberValueSix[i]));
          gameList.append(createGameField(arrayNumberValueSix[i]));
        }
      }

      // корректное заполнение значением карточек если ввели 8
      if (input.value % 2 === 0 && input.value == 8) {
        fyShuffle(arrayNumberValueEight, input.value ** 2);

        for (let i = 0; i < arrayNumberValueEight.length; i++) {
          arrayItem.push(createGameField(arrayNumberValueEight[i]));
          gameList.append(createGameField(arrayNumberValueEight[i]));
        }
      }

      // корректное заполнение значением карточек если ввели 10
      if (input.value % 2 === 0 && input.value == 10) {
        fyShuffle(arrayNumberValueTen, input.value ** 2);

        for (let i = 0; i < arrayNumberValueTen.length; i++) {
          arrayItem.push(createGameField(arrayNumberValueTen[i]));
          gameList.append(createGameField(arrayNumberValueTen[i]));
        }
      }

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

    // ТУТ не видит клика хотя передаю функцию, которая возвращает item
    gameItem.addEventListener('click', () => {
      console.log(345);
    });

    // if (arrayItem.length === countCardSuccess.length) {
    //   document.querySelector('.button-repeat').style.display = 'block';
    //   document.querySelector('.list').style.marginBottom = '20px';
    //   arrayItem = [];
    //   countCardSuccess = [];
    //   setTimeout(() => {
    //     alert('Победа');
    //   }, 700);
    // }

    // проверяем значения на совпадение и убираем класс или оставляем
    if (activeNumder.length == 2) {
      // countCardSuccess.push(activeNumder[0]);
      // countCardSuccess.push(activeNumder[1]);
      console.log(activeNumder);
      activeNumder = [];
    }
    if (
      activeNumder.length == 2
      // activeNumder[0].textContent !== activeNumder[1].textContent
    ) {
      setTimeout(() => {
        activeNumder[0].classList.remove('item-active');
        activeNumder[1].classList.remove('item-active');
        activeNumder = [];
      }, 200);
    }

    // кнопка повтора
    // gameRepeat.addEventListener('click', () => {
    //   arrayItem = [];
    //   countCardSuccess = [];
    //   container.append(gameForm.form);
    //   gameRepeat.remove();
    //   console.log(countCardSuccess);
    // });
  }

  window.createGameApp = createGameApp;
})();
