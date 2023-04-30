function getFullName(person) {
  if (!person) {
    throw new TypeError('Передано пустое значение');
  }
  if (!person.name || !person.secondName || !person.surname) {
    throw new TypeError('У переданного объекта отсутствуют нужные свойства');
  }
  return `${person.name} ${person.secondName} ${person.surname}`;
}

// console.log(getFullName(true));
// console.log(getFullName('String'));
// console.log(getFullName(100500));
try {
  console.log(getFullName({ name: 'Sasha' }));
} catch (error) {
  if (error.name === 'TypeError') {
    console.log(
      'Произошла ошибка при формировании полного имени: ' + error.message
    );
  } else {
    throw error;
  }
}
