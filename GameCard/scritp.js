(function () {
  let arrayItem = [];
  let arrayNumber = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
  let activeNumder = [];
  let countCardSuccess = [];

  function createGameRepeat() {
    let buttonRepeat = document.createElement('button');
    buttonRepeat.classList.add('form-btn');
    buttonRepeat.textContent = 'Сыграть еще';
    buttonRepeat.className = 'button-repeat';
    buttonRepeat.style.display = 'none';

    return buttonRepeat;
  }

  // создаем и возвращаем заголовок приложения
  function createAppTitle() {
    let appTitle = document.createElement('h1');
    appTitle.innerHTML = 'Игра в пары';
    appTitle.style.marginBottom = '15px';

    return appTitle;
  }

  // создаем и возвращаем форму начала игры
  function createForm() {
    let form = document.createElement('form');
    let input = document.createElement('input');
    let btn = document.createElement('button');

    form.id = 'form';
    form.classList.add('form');
    input.classList.add('form__input');
    input.id = 'input';
    input.placeholder = 'Введите количество карточек по горизонтали/вертикали';
    btn.classList.add('form__btn');
    btn.textContent = 'Начать';

    btn.disabled = true;

    form.append(input);
    form.append(btn);

    input.addEventListener('input', function () {
      if (input.value) {
        btn.disabled = false;
      } else {
        btn.disabled = true;
      }
    });

    return {
      form,
      input,
      btn,
    };
  }

  // создаем предупреждение если ввели другое число
  function creareError() {
    let error = document.createElement('h3');
    error.innerHTML = 'Вы не попали в диапазон поэтому 4 в ряд по умолчанию';
    error.style.display = 'none';

    return error;
  }

  // создаем и возвращаем список элементов
  function createGameList() {
    let cardList = document.createElement('ul');
    cardList.classList.add('list');

    return cardList;
  }

  // создаем и возвращаем поле для игры
  function createGameField(number) {
    let cardItem = document.createElement('li');
    let cardText = document.createElement('span');

    cardItem.classList.add('item');
    cardText.classList.add('item__text');

    cardText.textContent = number;

    cardItem.addEventListener('click', () => {
      if (cardItem.classList == 'item' && cardText.classList == 'item__text') {
        cardItem.classList.add('item-active');
        cardText.classList.add('item__text-active');
        activeNumder.push(cardItem);
        activeNumder.push(cardText);
      }

      // проверяем значения на совпадение и убираем класс или оставляем
      if (
        activeNumder.length == 4 &&
        activeNumder[1].textContent === activeNumder[3].textContent
      ) {
        countCardSuccess.push(activeNumder[0]);
        countCardSuccess.push(activeNumder[2]);

        activeNumder = [];
      }
      if (
        activeNumder.length == 4 &&
        activeNumder[1].textContent !== activeNumder[3].textContent
      ) {
        setTimeout(() => {
          activeNumder[0].classList.remove('item-active');
          activeNumder[1].classList.remove('item__text-active');
          activeNumder[2].classList.remove('item-active');
          activeNumder[3].classList.remove('item__text-active');
          activeNumder = [];
        }, 1000);
      }

      if (arrayItem.length === countCardSuccess.length) {
        document.querySelector('.button-repeat').style.display = 'block';
        document.querySelector('.list').style.marginBottom = '20px';
        arrayItem = [];
        activeNumder = [];
        setTimeout(() => {
          alert('Победа');
        }, 700);
      }
    });

    if (cardText.textContent === 'А тут пусто') {
      cardText.style.fontSize = '16px';
    }

    cardItem.append(cardText);

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

  function createGameApp(container) {
    let appTitle = createAppTitle();
    let gameForm = createForm();
    let gameList = createGameList();
    let gameErrorValue = creareError();
    let gameRepeat = createGameRepeat();

    container.append(appTitle);
    container.append(gameForm.form);
    container.append(gameErrorValue);
    container.append(gameList);
    container.append(gameRepeat);

    gameForm.form.addEventListener('submit', function (e) {
      e.preventDefault();

      gameForm.form.remove();
      container.append(gameRepeat);
      // игнорируем создание элемента, если пользователь ничего не ввел в поле
      if (!gameForm.input.value || gameForm.input.value == /[0-9]/) {
        return;
      }

      if (gameForm.input.value ** 2 === 16 || gameForm.input.value % 2 === 1) {
        gameList.style.width = '645px';
      }

      if (gameForm.input.value ** 2 === 36) {
        gameList.style.width = '990px';
      }

      if (gameForm.input.value ** 2 === 64) {
        gameList.style.width = '100%';
      }

      let numder;

      if (gameForm.input.value % 2 === 0 && gameForm.input.value <= 10) {
        fyShuffle(arrayNumber, gameForm.input.value ** 2);

        for (let i = 0; i < gameForm.input.value ** 2; i++) {
          numder = arrayNumber[i];
          if (numder === '' || numder === undefined) {
            numder = 'А тут пусто';
          }
          arrayItem.push(createGameField(numder));
          gameList.append(createGameField(numder));
        }
      } else {
        fyShuffle(arrayNumber);

        for (let i = 0; i < 16; i++) {
          gameErrorValue.style.display = 'block';
          numder = arrayNumber[i];
          arrayItem.push(createGameField(numder));
          gameList.append(createGameField(numder));
        }
      }
    });

    gameRepeat.addEventListener('click', () => {
      let allItem = document.querySelectorAll('.item');
      for (let item of allItem) {
        item.remove();
      }
      container.append(gameForm.form);
      gameRepeat.remove();
      console.log(arrayItem);
    });
  }

  window.createGameApp = createGameApp;
})();
