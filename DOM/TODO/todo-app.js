(function () {
  let arrayItem = [];
  let listName = '';

  // создаем и возвращаем заголовок приложения
  function createAppTitle(title) {
    let appTitle = document.createElement('h2');
    appTitle.innerHTML = title;
    return appTitle;
  }

  // создаем и возвращаем форму для создания дела
  function createTodoItemForm() {
    let form = document.createElement('form');
    let input = document.createElement('input');
    let buttonWrapper = document.createElement('div');
    let button = document.createElement('button');

    form.classList.add('input-group', 'mb-3');
    input.classList.add('form-control');
    input.placeholder = 'Введите название нового дела';
    buttonWrapper.classList.add('input-group-append');
    button.classList.add('btn', 'btn-primary');
    button.textContent = 'Добавь дело';
    // добавляем disabled когда пустой input
    button.disabled = true;

    buttonWrapper.append(button);
    form.append(input);
    form.append(buttonWrapper);

    // убираем disabled во время ввода дела
    input.addEventListener('input', function () {
      if (input.value) {
        button.disabled = false;
      } else {
        button.disabled = true;
      }
    });

    return {
      form,
      input,
      button,
    };
  }

  // создаем и возвращаем список элементов
  function createTodoList() {
    let list = document.createElement('ul');
    list.classList.add('list-group');
    return list;
  }

  // создаем и возвращаем дело
  function createTodoItem(obj) {
    let item = document.createElement('li');
    // кнопки помещаем в элемент, который красиво покажет их в одной группе
    let buttonGroup = document.createElement('div');
    let doneButton = document.createElement('button');
    let deleteButton = document.createElement('button');

    // устонавливаем стили для элемента списка, а также для размещения внопок
    // в его правой части с помощью flex
    item.classList.add(
      'list-group-item',
      'd-flex',
      'justify-content-between',
      'align-items-center'
    );

    item.textContent = obj.name;

    if (obj.done) {
      item.classList.add('list-group-item-success');
    }

    buttonGroup.classList.add('btn-group', 'btn-group-sm');
    doneButton.classList.add('btn', 'btn-success');
    doneButton.textContent = 'Готово';
    deleteButton.classList.add('btn', 'btn-danger');
    deleteButton.textContent = 'Удалить';

    // добавляем обработчики на кнопки
    doneButton.addEventListener('click', function () {
      item.classList.toggle('list-group-item-success');

      for (let listItem of arrayItem) {
        if (listItem.id === obj.id) listItem.done = !listItem.done;
      }
      saveList(arrayItem, listName);
    });
    deleteButton.addEventListener('click', function () {
      if (confirm('Вы уверены?')) {
        item.remove();

        for (let i = 0; i < arrayItem.length; i++) {
          if (arrayItem[i].id === obj.id) arrayItem.splice(i, 1);
        }
        saveList(arrayItem, listName);
      }
    });

    // вкладываем кнопки в отдельный элемент, чтобы они объединились в один блок
    buttonGroup.append(doneButton);
    buttonGroup.append(deleteButton);
    item.append(buttonGroup);

    // приложению нужен доступ к самому элементу и кнопкам, чтобы обрабатывать события нажатия
    return {
      item,
      doneButton,
      deleteButton,
    };
  }

  function getNewId(arr) {
    let max = 0;
    for (const item of arr) {
      if (item.id > max) max = item.id;
    }
    return max + 1;
  }

  function saveList(array, keyName) {
    localStorage.setItem(keyName, JSON.stringify(array));
    console.log(array);
  }

  function createTodoApp(container, title = 'Список дел', keyName, array = []) {
    let todoAppTittle = createAppTitle(title);
    let todoItemForm = createTodoItemForm();
    let todoList = createTodoList();

    container.append(todoAppTittle);
    container.append(todoItemForm.form);
    container.append(todoList);

    listName = keyName;
    arrayItem = array;

    let localData = localStorage.getItem(listName);

    if (localData !== null && localData !== '')
      arrayItem = JSON.parse(localData);

    for (const itemList of arrayItem) {
      let todoItem = createTodoItem(itemList);
      todoList.append(todoItem.item);
    }

    // function createItemState(array) {
    //   let value = Object.values(array);

    //   for (let i = 0; i < value.length; i++) {
    //     let newItemState = {
    //       id: getNewId(arrayItem),
    //       name: value[i][0],
    //       done: value[i][1],
    //     };
    //     if (arrayItem.length === array.length) {
    //       arrayItem.push(newItemState);
    //     }
    //   }
    // }
    // createItemState(array);

    // добавляем переданные значения дела в список
    // if (arrayItem.length === 0) {
    //   arrayItem.map((n) => todoList.append(createTodoItem(n).item));
    // }

    // браузер создает событие submit на форме по надатию Enter или на кнопку создания дела
    todoItemForm.form.addEventListener('submit', async function (e) {
      // эта строчка необходима, чтобы предотвратить стандартное действия браузера
      // в даном случае мы не хотим, чтобы страница перезагружалась при отправке формы
      e.preventDefault();

      // игнорируем создание элемента, если пользователь ничего не ввел в поле
      // добавляем кнопке disable при пустом вводе
      if (!todoItemForm.input.value) {
        return;
      }

      let newItem = {
        id: getNewId(arrayItem),
        name: todoItemForm.input.value,
        done: false,
      };

      const todoItemElement = createTodoItem(newItem);

      arrayItem.push(newItem);

      saveList(arrayItem, listName);

      // создаем и добавляем в список новое дело с названием из поля для ввода
      todoList.append(todoItemElement.item);

      // обнуляем значение в поле, чтобы не пришлось стирать его вручную
      todoItemForm.input.value = '';

      // добавляем disable после submit
      todoItemForm.button.disabled = true;
    });
  }

  window.createTodoApp = createTodoApp;
})();
