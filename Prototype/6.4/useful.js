const target = {
  name: 'Sasha', // enumerable: true, writable: true, configurable: true
};

// свойства по умолчанию false если их не прописываем в defineProperty
Object.defineProperty(target, 'name', {
  value: 'Sasha',
  // либо значение, либо get/set
  //   get() {},
  //   set(v) {},

  // показывать ли данный ключ при использовании цикла  true - показывает
  enumerable: true,

  // можно ли переопределять значение у данного свойства true - можно
  writable: false,

  // разрешает переопределение свойства с помощью повторного вызова Object.defineProperty
  configurable: false,
});

// enumerable: false
Object.keys(target); // []
// enumerable: true
Object.keys(target); // ['name']

// writable: false
target.name = 'Василий';
console.log(target.name); // Sasha (не Василий!)

// configurable: false
// TypeError: Cannot redefine property: name
Object.defineProperty(target, 'name', {
  value: 'Василий',
  enumerable: true,
});
