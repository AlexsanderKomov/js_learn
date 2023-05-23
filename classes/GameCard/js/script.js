import { AmazingCard } from './AmazingCard.js';
import { Card } from './card.js';

(function () {
  const arrayItem = [];
  const arrayNumber = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
  const activeNumber = [];
  const cardsWithMatchingNumbers = [];
  let arrayNumberValue = []; // сделал через let, потому что в функции на 110 строке меняю массив

  const container = document.getElementById('game-app');
  const form = document.querySelector('.form');
  const input = document.querySelector('.form__input');
  const btn = document.querySelector('.form__btn');
  const gameList = document.querySelector('.list');
  const btnNumber = document.querySelector('.btn-number');
  const btnImg = document.querySelector('.btn-img');

  const timerGame = document.querySelector('.timer');
  const timerValue = document.querySelector('.timer__input');
  const timerSeconds = document.querySelector('.timer__seconds');
  const timerButton = document.querySelector('.timer__btn');
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
      timerButton.style.display = 'block';
      arrayItem.splice(0, arrayItem.length);
      activeNumber.splice(0, activeNumber.length);
      cardsWithMatchingNumbers.splice(0, cardsWithMatchingNumbers.length);
      form.style.display = 'block';
      buttonRepeat.remove();
      for (const card of document.querySelectorAll('.item')) {
        card.remove();
      }
    });

    return buttonRepeat;
  }

  // таймер
  timerGame.addEventListener('submit', function (e) {
    e.preventDefault();

    timerSeconds.textContent = timerValue.value;
    timerSeconds.style.display = 'block';
    timerValue.style.display = 'none';
    timerButton.style.display = 'none';
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

  function shuffledArray(value) {
    return value === 4
      ? arrayNumber.sort((a, b) => 0.5 - Math.random())
      : getArrayNumberValue(value).sort((a, b) => 0.5 - Math.random());
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

  function createGameField(value, flip, boolean) {
    if (boolean) {
      for (const cardNumber of shuffledArray(value)) {
        let card = new Card(document.getElementById('list'), flip, cardNumber);
        // card.createElement();
      }
    } else {
      for (const cardNumber of shuffledArray(value)) {
        let card = new AmazingCard(
          document.getElementById('list'),
          flip,
          cardNumber
        );
        // card.createElement();
      }
    }
  }

  function createGameApp() {
    let boolean = true;

    btnNumber.addEventListener('click', () => {
      if (boolean) {
        return;
      } else {
        boolean = true;
      }
    });

    btnImg.addEventListener('click', () => {
      if (boolean) {
        boolean = false;
      } else {
        return;
      }
    });

    let firstCard = null;
    let secondCard = null;

    function flip(card) {
      if (firstCard === null) {
        firstCard = card;
      } else {
        if (secondCard === null) {
          secondCard = card;
        }
      }

      if (firstCard !== null && secondCard !== null) {
        if (firstCard.number === secondCard.number) {
          firstCard.success = true;
          secondCard.success = true;
          firstCard = null;
          secondCard = null;
        }
      }

      if (firstCard !== null && secondCard !== null) {
        if (firstCard.number !== secondCard.number) {
          setTimeout(() => {
            firstCard.open = false;
            secondCard.open = false;
            firstCard = null;
            secondCard = null;
          }, 600);
        }
      }
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      if (timerValue.value === '60') {
        timerSeconds.textContent = '60';
        timerSeconds.style.display = 'block';
        timerValue.style.display = 'none';
        timerButton.style.display = 'none';
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

      if (input.value % 2 !== 0 || input.value > 10) {
        createGameField(4, flip, boolean);
      } else {
        createGameField(+input.value, flip, boolean);
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
