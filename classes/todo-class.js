class TodoItem {
  done = false;
  createdAt = new Date(2020, 8, 1, 12, 0, 0);

  constructor(title = 'Новое дело') {
    this.title = title;
  }
}

const todoItem = new TodoItem('Купить хлеб');

// todoItem.title = 'Новое дело';

console.log(todoItem);

// Date, Promise, Error, SyntaxError, TypeError
