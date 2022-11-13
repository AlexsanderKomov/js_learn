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
  function createGameField(obj) {
    let cardItem = document.createElement('li');

    cardItem.classList.add('item');
    cardItem.textContent = obj.number;

    cardItem.addEventListener('click', function () {
      cardItem.classList.add('item-active');
      obj.open = true;
      activeNumder.push(cardItem);
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
  function getArrayNumberValue(value) {
    if (value % 2 === 0 && value == 6) {
      return arrayNumber.concat(arrayNumber).concat(arrayNumber).slice(0, 36);
    }
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

      // корректное заполнение карточек при значении по умолчанию
      if (input.value % 2 !== 0) {
        fyShuffle(arrayNumber);

        for (let i = 0; i < 16; i++) {
          newItem.number = arrayNumber[i];
          arrayItem.push(gameItem(newItem));
          gameList.append(gameItem(newItem));
        }
      }

      // корректное заполнение значением карточек если ввели 4
      if (input.value > 10 || (input.value <= 4 && input.value % 2 === 0)) {
        fyShuffle(arrayNumber, input.value ** 2);

        for (let i = 0; i < input.value ** 2; i++) {
          newItem.number = arrayNumber[i];
          arrayItem.push(gameItem(newItem));
          gameList.append(gameItem(newItem));
        }
      }

      // корректное заполнение значением карточек если ввели 6
      if (input.value % 2 === 0 && input.value == 6) {
        fyShuffle(getArrayNumberValue(input.value), input.value ** 2);

        for (let i = 0; i < getArrayNumberValue.length; i++) {
          newItem.number = getArrayNumberValue[i];
          arrayItem.push(gameItem(newItem));
          gameList.append(gameItem(newItem));
        }
      }

      // корректное заполнение значением карточек если ввели 8
      if (input.value % 2 === 0 && input.value == 8) {
        fyShuffle(arrayNumberValueEight, input.value ** 2);

        for (let i = 0; i < arrayNumberValueEight.length; i++) {
          newItem.number = arrayNumberValueEight[i];
          arrayItem.push(gameItem(newItem));
          gameList.append(gameItem(newItem));
        }
      }

      // корректное заполнение значением карточек если ввели 10
      if (input.value % 2 === 0 && input.value == 10) {
        fyShuffle(arrayNumberValueTen, input.value ** 2);

        for (let i = 0; i < arrayNumberValueTen.length; i++) {
          newItem.number = arrayNumberValueTen[i];
          arrayItem.push(gameItem(newItem));
          gameList.append(gameItem(newItem));
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

    // Логика игры

    // if (arrayItem.length > 0) {
    //   true;
    // }
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

    // if (
    //   activeNumder.length == 2
    //   // activeNumder[0].textContent !== activeNumder[1].textContent
    // ) {
    //   setTimeout(() => {
    //     activeNumder[0].classList.remove('item-active');
    //     activeNumder[1].classList.remove('item-active');
    //     activeNumder = [];
    //   }, 200);
    // }

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
