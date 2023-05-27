(() => {
  function createForm() {
    const form = document.createElement('form');
    form.classList.add(
      'd-flex',
      'flex-column',
      'justify-content-center',
      'align-items-center',
      'mb-3'
    );
    const input = document.createElement('input');
    input.classList.add('mb-3', 'w-100');
    input.placeholder = 'Введите стандартный класс';
    input.value = 'HTMLElement';
    const btn = document.createElement('button');
    btn.classList.add('btn', 'btn-primary', 'align-self-center');
    btn.textContent = 'Показать цепочку прототипов';

    form.append(input);
    form.append(btn);

    return { form, input };
  }

  function createListItem(parent) {
    const listProperty = document.createElement('ol');
    let count = 0;

    for (const itemProperty in parent) {
      if (
        parent.propertyIsEnumerable(itemProperty) &&
        count !== Object.keys(parent).length
      ) {
        const itemPropertyItem = document.createElement('li');
        itemPropertyItem.textContent = `${itemProperty}`;
        count++;
        listProperty.append(itemPropertyItem);
      }
    }
    return listProperty;
  }

  function createList(value) {
    const listName = document.createElement('ol');
    const item = createName(value);

    if (Object.getPrototypeOf(item.parent)) {
      debugger;
      console.log(item);

      item.itemName.append(createListItem(item.parent));
      listName.append(item.itemName);
    }

    return listName;
  }

  function createName(value) {
    const itemName = document.createElement('li');

    if (
      typeof window[String(value).trim()] === 'function' &&
      window.hasOwnProperty(String(value).trim())
    ) {
      let parent = window[value].prototype;
      console.log(parent);
      itemName.textContent = parent.constructor
        ? parent.constructor.name
        : `[Без названия]`;
    }
    return { itemName, parent };
  }

  function createApp() {
    const app = document.getElementById('app');
    const form = createForm();

    form.form.addEventListener('submit', (e) => {
      e.preventDefault();
      app.append(createList(String(form.input.value).trim()));
    });

    app.append(form.form);
  }

  createApp();
})();
