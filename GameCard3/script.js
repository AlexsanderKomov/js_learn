(function () {
  const arrayItem = [];
  const arrayNumber = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
  const activeNumder = [];
  const cardsWithMatchingNumbers = [];
  let arrayNumberValue = []; // сделал через let, потому что в функции на 110 строке меняю массив

  const container = document.getElementById('game-app');
  const form = document.querySelector('.form');
  const input = document.querySelector('.form__input');
  const btn = document.querySelector('.form__btn');
  const gameList = document.querySelector('.list');

  const timerGame = document.querySelector('.timer');
  const timerValue = document.querySelector('.timer__input');
  const timerSeconds = document.querySelector('.timer__seconds');
  const timerbutton = document.querySelector('.timer__btn');
  let interval;

  input.addEventListener('input', function () {
    if (!input.value) {
      btn.disabled = true;
    } else {
      btn.disabled = false;
    }
  });

  function createGameRepeat() {
    const buttonRepeat = document.createElement('button');
    buttonRepeat.textContent = 'Сыграть еще';
    buttonRepeat.className = 'button-repeat';

    buttonRepeat.addEventListener('click', () => {
      gameList.style.marginBottom = '0';
      input.value = '4';
      timerValue.value = '60';
      timerSeconds.style.display = 'none';
      timerValue.style.display = 'block';
      timerbutton.style.display = 'block';
      arrayItem.splice(0, arrayItem.length);
      activeNumder.splice(0, activeNumder.length);
      cardsWithMatchingNumbers.splice(0, cardsWithMatchingNumbers.length);
      form.style.display = 'block';
      buttonRepeat.remove();
      for (const card of document.querySelectorAll('.item')) {
        card.remove();
      }
    });

    return buttonRepeat;
  }

  // создаем и возвращаем поле для игры
  function createGameField(obj = {}) {
    let cardItem = document.createElement('li');

    cardItem.classList.add('item');
    cardItem.textContent = obj.number;

    cardItem.addEventListener('click', function () {
      cardItem.classList.add('item-active');
      activeNumder.push(cardItem);

      // Логика игры
      gameLogic();
    });

    return cardItem;
  }

  // логика игры
  function gameLogic() {
    if (activeNumder.length === 3) {
      if (activeNumder[0].textContent !== activeNumder[1].textContent) {
        activeNumder[0].classList.remove('item-active');
        activeNumder[1].classList.remove('item-active');
        activeNumder.splice(0, 2);
      }
    }
    if (activeNumder.length === 2) {
      if (activeNumder[0].textContent === activeNumder[1].textContent) {
        activeNumder[0].classList.add('item-success');
        activeNumder[1].classList.add('item-success');
        cardsWithMatchingNumbers.push(activeNumder[0]);
        cardsWithMatchingNumbers.push(activeNumder[1]);
        activeNumder.splice(0, 2);
      }
    }
    if (arrayItem.length === cardsWithMatchingNumbers.length) {
      gameList.style.marginBottom = '20px';
      // Останавливаем таймер когда игрок выиграл
      clearInterval(interval);
      container.append(createGameRepeat());
      setTimeout(() => {
        alert('Вы побелиди');
      }, 220);
    }
  }

  // перемешиваем цифры
  function fyShuffle(arr, i = 16) {
    while (--i > 0) {
      let randIndex = Math.floor(Math.random() * (i + 1));
      [arr[randIndex], arr[i]] = [arr[i], arr[randIndex]];
    }
    return arr;
  }

  // создаем массив значений для ввода значения 6 или 8 или 10
  function getArrayNumberValue(value) {
    if (value === 6) {
      arrayNumberValue = arrayNumber
        .concat(arrayNumber)
        .concat(arrayNumber)
        .slice(0, 36);
    }
    if (value === 8) {
      arrayNumberValue = arrayNumber
        .concat(arrayNumber)
        .concat(arrayNumber)
        .concat(arrayNumber);
    }
    if (value === 10) {
      arrayNumberValue = arrayNumber
        .concat(arrayNumber)
        .concat(arrayNumber)
        .concat(arrayNumber)
        .concat(arrayNumber)
        .concat(arrayNumber)
        .concat(arrayNumber)
        .slice(0, 100);
    }

    return arrayNumberValue;
  }

  // таймер
  timerGame.addEventListener('submit', function (e) {
    e.preventDefault();

    timerSeconds.textContent = timerValue.value;
    timerSeconds.style.display = 'block';
    timerValue.style.display = 'none';
    timerbutton.style.display = 'none';
  });

  function timer() {
    if (timerSeconds.textContent > 0) {
      timerSeconds.textContent -= 1;
    } else {
      clearInterval(interval);
      timerSeconds.textContent = `Время вышло`;
      gameList.style.marginBottom = '20px';
      document
        .querySelectorAll('.item')
        .forEach((el) => el.classList.add('item-disabled'));
      container.append(createGameRepeat());
    }
  }

  function createGameApp() {
    const gameItem = createGameField;

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      if (timerValue.value === '60') {
        timerSeconds.textContent = '60';
        timerSeconds.style.display = 'block';
        timerValue.style.display = 'none';
        timerbutton.style.display = 'none';
      }

      // Устонавливаем таймер
      if (timerSeconds.textContent > 0) {
        clearInterval(interval);
        interval = setInterval(timer, 1000);
      }

      form.style.display = 'none';
      // игнорируем создание элемента, если пользователь ничего не ввел в поле
      if (!input.value) {
        return;
      }

      let newItem = {
        number: null,
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
      if (+input.value === 6 || +input.value === 8 || +input.value === 10) {
        fyShuffle(getArrayNumberValue(+input.value), input.value ** 2);

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
