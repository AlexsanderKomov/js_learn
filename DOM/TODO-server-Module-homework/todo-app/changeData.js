let api = await import('./api.js');
let localData = await import('./local.js');

let todoItemList = null,
  createTodoItem = null,
  switchTodoItemDone = null,
  deleteTodoItem = null;

const btnChangeData = document.querySelector('.btn-change');

if (JSON.parse(localStorage.getItem('local')) == null || undefined) {
  localStorage.setItem('local', 'true');
}

btnChangeData.textContent = `Перейти на ${
  JSON.parse(localStorage.getItem('local')) ? 'серверное' : 'локальное'
} хранилище`;

export async function changeData(owner) {
  btnChangeData.addEventListener('click', () => {
    if (JSON.parse(localStorage.getItem('local'))) {
      btnChangeData.textContent = 'Перейти на серверное хранилище';
      localStorage.setItem('local', 'false');
    } else {
      btnChangeData.textContent = 'Перейти на локальное хранилище';
      localStorage.setItem('local', 'true');
    }

    window.location.reload();
  });

  if (JSON.parse(localStorage.getItem('local'))) {
    todoItemList = localData.getTodoList(owner);
    createTodoItem = localData.createTodoItem;
    switchTodoItemDone = localData.switchTodoItemDone;
    deleteTodoItem = localData.deleteTodoItem;
  } else {
    todoItemList = await api.getTodoList(owner);
    createTodoItem = api.createTodoItem;
    switchTodoItemDone = api.switchTodoItemDone;
    deleteTodoItem = api.deleteTodoItem;
  }

  return {
    todoItemList,
    createTodoItem,
    switchTodoItemDone,
    deleteTodoItem,
  };
}
