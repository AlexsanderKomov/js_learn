import { generateRandomString } from "./generateRandomIndex.js";

export function getTodoList(owner) {
  if (localStorage.getItem(owner) === null || undefined) {
    return [];
  } else {
    return JSON.parse(localStorage.getItem(owner));
  }
}

export function createTodoItem({ owner, name }) {
  let localArray;
  if (localStorage.getItem(owner) === null || undefined) {
    localArray = [];
  } else {
    localArray = JSON.parse(localStorage.getItem(owner));
  }
  localArray.push({ name, done: false, id: generateRandomString() });
  localStorage.setItem(owner, JSON.stringify(localArray));

  return { owner, name, done: false };
}

export function switchTodoItemDone({ todoItem }, owner) {
  console.log(todoItem);
  let localArray = JSON.parse(localStorage.getItem(owner));
  todoItem.done = !todoItem.done;
  localArray.map((item) => {
    if (item.id === todoItem.id) {
      item.done = todoItem.done;
    }
  });

  localStorage.setItem(owner, JSON.stringify(localArray));
}

export function deleteTodoItem({ element, todoItem }, owner) {
  if (!confirm("Вы уверены?")) {
    return;
  }

  let localArray = JSON.parse(localStorage.getItem(owner));
  for (let i = 0; i < localArray.length; i++) {
    if (localArray[i].id === todoItem.id) {
      localArray.splice(i, 1);
    }
  }

  localStorage.setItem(owner, JSON.stringify(localArray));
  element.remove();
}
