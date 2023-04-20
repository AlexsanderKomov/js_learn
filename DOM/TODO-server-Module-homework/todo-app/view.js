// создаем и возвращаем заголовок приложения
function createAppTitle(title) {
  let appTitle = document.createElement("h2");
  appTitle.innerHTML = title;
  return appTitle;
}

// создаем и возвращаем форму для создания дела
function createTodoItemForm() {
  let form = document.createElement("form");
  let input = document.createElement("input");
  let buttonWrapper = document.createElement("div");
  let button = document.createElement("button");

  form.classList.add("input-group", "mb-3");
  input.classList.add("form-control");
  input.placeholder = "Введите название нового дела";
  buttonWrapper.classList.add("input-group-append");
  button.classList.add("btn", "btn-primary");
  button.textContent = "Добавить дело";
  button.disabled = true;

  input.addEventListener("input", () => {
    if (input.value.length <= 1) {
      button.disabled = true;
    } else {
      button.disabled = false;
    }
  });

  buttonWrapper.append(button);
  form.append(input);
  form.append(buttonWrapper);

  return {
    form,
    input,
    button,
  };
}

// создаем и возвращаем список элементов
function createTodoList() {
  let list = document.createElement("ul");
  list.classList.add("list-group");
  return list;
}

// создаем и возвращаем дело
function createTodoItemElement(todoItem, { onDone, onDelete }) {
  const doneClass = "list-group-item-success";
  let item = document.createElement("li");
  // кнопки помещаем в элемент, который красиво покажет их в одной группе
  let buttonGroup = document.createElement("div");
  let doneButton = document.createElement("button");
  let deleteButton = document.createElement("button");

  // устонавливаем стили для элемента списка, а также для размещения внопок
  // в его правой части с помощью flex
  item.classList.add(
    "list-group-item",
    "d-flex",
    "justify-content-between",
    "align-items-center"
  );
  if (todoItem.done) {
    item.classList.toggle(doneClass);
  }
  item.textContent = todoItem.name;

  buttonGroup.classList.add("btn-group", "btn-group-sm");
  doneButton.classList.add("btn", "btn-success");
  doneButton.textContent = "Готово";
  deleteButton.classList.add("btn", "btn-danger");
  deleteButton.textContent = "Удалить";

  // добавляем обработчики на кнопки
  doneButton.addEventListener("click", function () {
    onDone({ todoItem, element: item }, todoItem.owner);
    console.log(todoItem.done);
    item.classList.toggle(doneClass, todoItem.done);
  });
  deleteButton.addEventListener("click", function () {
    onDelete({ todoItem, element: item }, todoItem.owner);
  });

  // вкладываем кнопки в отдельный элемент, чтобы они объединились в один блок
  buttonGroup.append(doneButton);
  buttonGroup.append(deleteButton);
  item.append(buttonGroup);

  return item;
}

function createTodoApp(
  container,
  {
    title,
    owner,
    todoItemList = [],
    onCreateFormSubmit,
    onDoneClick,
    onDeleteClick,
  }
) {
  const todoAppTitle = createAppTitle(title);
  const todoItemForm = createTodoItemForm();
  const todoList = createTodoList();
  const handlers = { onDone: onDoneClick, onDelete: onDeleteClick };

  container.append(todoAppTitle);
  container.append(todoItemForm.form);
  container.append(todoList);

  todoItemList.forEach((todoItem) => {
    const todoItemElement = createTodoItemElement(todoItem, handlers, owner);
    todoList.append(todoItemElement);
  });

  todoItemForm.form.addEventListener("submit", async (e) => {
    e.preventDefault();

    if (!todoItemForm.input.value) {
      return;
    }

    const todoItem = await onCreateFormSubmit({
      owner,
      name: todoItemForm.input.value.trim(),
    });

    const todoItemElement = createTodoItemElement(todoItem, handlers);

    todoList.append(todoItemElement);

    todoItemForm.input.value = "";
  });
}

export { createTodoApp };
