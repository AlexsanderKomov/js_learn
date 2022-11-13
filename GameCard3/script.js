(function () {
  const arrayItem = [];
  const arrayNumber = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
  let activeNumder = [];
  const countCardSuccess = [];
  const arrayNumberValue = [];

  const container = document.getElementById('game-app');
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
      activeNumder.push(cardItem);
      console.log(activeNumder[0]);
      console.log(activeNumder[1]);

      // Логика игры
      if (activeNumder.length == 2) {
        if (activeNumder[0].textContent !== activeNumder[1].textContent) {
          setTimeout(() => {
            activeNumder[0].classList.remove('item-active');
            activeNumder[1].classList.remove('item-active');
            activeNumder = [];
          }, 500);
        }
        if (activeNumder[0].textContent === activeNumder[1].textContent) {
          setTimeout(() => {
            activeNumder[0].classList.add('item-success');
            activeNumder[1].classList.add('item-success');
            countCardSuccess.push(activeNumder[0]);
            countCardSuccess.push(activeNumder[1]);
            activeNumder = [];
          }, 500);
        }
      }
    });

    return cardItem;
  }

  // перемешиваем цифры
  function fyShuffle(arr, i = 16) {
    while (--i > 0) {
      let randIndex = Math.floor(Math.random() * (i + 1));
      [arr[randIndex], arr[i]] = [arr[i], arr[randIndex]];
    }
    console.log(arr);
    return arr;
  }

  // создаем массив значений для ввода значения 6 или 8 или 10
  function getArrayNumberValue(value) {
    if (value % 2 === 0 && value == 6) {
      arrayNumberValue = arrayNumber
        .concat(arrayNumber)
        .concat(arrayNumber)
        .slice(0, 36);
    }
    if (value % 2 === 0 && value == 8) {
      arrayNumberValue = arrayNumber
        .concat(arrayNumber)
        .concat(arrayNumber)
        .concat(arrayNumber);
    }
    if (value % 2 === 0 && value == 10) {
      arrayNumberValue = arrayNumber
        .concat(arrayNumber)
        .concat(arrayNumber)
        .concat(arrayNumber)
        .concat(arrayNumber)
        .concat(arrayNumber)
        .slice(0, 100);
    }

    return arrayNumberValue;
  }

  function createGameApp(container) {
    const gameItem = createGameField;
    const gameErrorValue = creareError();
    const gameRepeat = createGameRepeat();

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

      if (input.value % 2 !== 0 || input.value > 10) {
        fyShuffle(arrayNumber);

        for (let i = 0; i < 16; i++) {
          newItem.number = arrayNumber[i];
          arrayItem.push(gameItem(newItem));
          gameList.append(gameItem(newItem));
        }
      }

      // корректное заполнение значением карточек если ввели 4
      if (input.value <= 4 && input.value % 2 === 0) {
        fyShuffle(arrayNumber, input.value ** 2);

        for (let i = 0; i < input.value ** 2; i++) {
          newItem.number = arrayNumber[i];
          arrayItem.push(gameItem(newItem));
          gameList.append(gameItem(newItem));
        }
      }

      // корректное заполнение значением карточек если ввели 6, 8 ,10
      if (input.value == 6 || input.value == 8 || input.value == 10) {
        fyShuffle(getArrayNumberValue(input.value), input.value ** 2);

        for (let i = 0; i < arrayNumberValue.length; i++) {
          newItem.number = arrayNumberValue[i];
          arrayItem.push(gameItem(newItem));
          gameList.append(gameItem(newItem));
        }
      }

      // адаптация списка и карточек под стандартное кол-во
      if (
        input.value ** 2 === 16 ||
        input.value % 2 === 1 ||
        input.value > 10
      ) {
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

  createGameApp(container);
})();
