import Card from './card.js';

let gameValue = document.querySelector('.game__value');

let form = document.querySelector('.form');
let input = document.querySelector('.form__input');
let gameStart = document.querySelector('.form__button');
let gameRepeat = document.querySelector('.game__repeat');
let gameField = document.querySelector('.game');

let timerGame = document.querySelector('.timer');
let timerValue = document.querySelector('.timer__input');
let timerSeconds = document.querySelector('.timer__second');
let timerbutton = document.querySelector('.timer__button');
let interval;

timerbutton.addEventListener('click', function () {
  timerSeconds.textContent = timerValue.value;
  timerValue.value = '';
  timerValue.style.display = 'none';
  timerbutton.style.display = 'none';
});

gameRepeat.remove();
gameStart.disabled = true;

// Устонавливаем состояние кнопки "Начать игру"
input.addEventListener('input', function () {
  if (input.value.length > 0) {
    gameStart.disabled = false;
  } else {
    gameStart.disabled = true;
  }
});

// Запускаем игру на кнопку "Начать игру"
form.addEventListener('submit', function (e) {
  e.preventDefault();

  // Устанавливаем секунды по умолчанию
  if (timerSeconds.textContent === '') {
    timerSeconds.textContent = 30;
    timerValue.style.display = 'none';
    timerbutton.style.display = 'none';
  }

  // Устонавливаем таймер
  if (timerSeconds.textContent > 0) {
    clearInterval(interval);
    interval = setInterval(timer, 1000);
    console.log(123);
    console.log(timerSeconds.textContent);
  }

  if (input.value % 2 === 0 && input.value <= 10) {
    newGame(document.getElementById('game'), input.value ** 2);
  } else {
    newGame(document.getElementById('game'), 16);
    gameField.style.width = '75%';
  }

  if (input.value ** 2 === 4) {
    gameField.style.width = '45%';
  }

  if (input.value ** 2 === 16) {
    gameField.style.width = '75%';
  }

  gameValue.style.marginBottom = '20px';

  input.value = '';
  gameStart.disabled = true;
  form.remove();
});

function newGame(container, cardsCount) {
  // Создать поле
  let cardsNumberArray = [];
  let cardsArray = [];
  let firstCard = null;
  let secondCard = null;

  for (let i = 1; i <= cardsCount / 2; i++) {
    cardsNumberArray.push(i);
    cardsNumberArray.push(i);
  }

  cardsNumberArray = cardsNumberArray.sort(() => Math.random() - 0.5);

  for (const cardNumber of cardsNumberArray) {
    cardsArray.push(new Card(container, cardNumber, flip));
  }

  // Логика игры
  function flip(card) {
    if (firstCard !== null && secondCard !== null) {
      if (firstCard.number !== secondCard.number) {
        firstCard.open = false;
        secondCard.open = false;
        firstCard = null;
        secondCard = null;
      }
    }

    if (firstCard == null) {
      firstCard = card;
    } else {
      if (secondCard == null) {
        secondCard = card;
      }
    }

    if (firstCard !== null && secondCard !== null) {
      if (firstCard.number == secondCard.number) {
        firstCard.success = true;
        secondCard.success = true;
        firstCard = null;
        secondCard = null;
      }
    }

    // Если победил
    if (
      document.querySelectorAll('.card.success').length ==
      cardsNumberArray.length
    ) {
      setTimeout(() => {
        alert('Вы победили');
      }, 200);

      // Останавливаем таймер когда игрок выиграл
      clearInterval(interval);
      container.style.marginBottom = '25px';
      document.getElementById('container').append(gameRepeat);
    }

    gameRepeat.addEventListener('click', function () {
      container.style.marginBottom = '0';

      for (const card of document.querySelectorAll('.card.success')) {
        card.remove();
      }
      gameField.remove();
      timerSeconds.textContent = '';
      timerValue.style.display = 'block';
      timerbutton.style.display = 'block';
      cardsNumberArray = [];
      cardsArray = [];
      firstCard = null;
      secondCard = null;
      document.getElementById('container').append(timerGame);
      document.getElementById('container').append(form);
      document.getElementById('container').append(gameField);
      gameRepeat.remove();
    });
  }
}

function timer() {
  if (timerSeconds.textContent > 0) {
    timerSeconds.textContent -= 1;
  } else {
    clearInterval(interval);
    timerSeconds.textContent = `Время вышло`;
    document.getElementById('game').style.marginBottom = '15px';
    for (const card of document.querySelectorAll('.card')) {
      card.classList.add('disabled');
    }
    alert('Время вышло');

    document.getElementById('container').append(gameRepeat);
  }
}
