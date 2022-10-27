// 8 типов в JS 1. boolen 2. string 3. numder 4. symbol 5. bigint 6. null 7. undefined 8. object

// простые
typeof 1; // numder
typeof false; // boolean
typeof 'abx'; // string
typeof 123n; // bigint
typeof Symbol(); // symbol

// состаные
typeof {}; // object
typeof []; // object
typeof function () {}; // function

// нелевые
typeof undefined; // undefined
typeof null; // object

// расхождения typeof и систем типов
typeof null; // object, хотя реальный тип значения - null
typeof function () {}; // function, хотя в системе типов функция не выделяется в отдельный тип

// примеры использования typeof
function getStringValue(unknown) {
  if (typeof unknown === 'string') {
    return unknown;
  }
  if (typeof unknown === 'function') {
    return unknown();
  }
  if (typeof unknown === 'object') {
    return unknown.toString();
  }
  return '';
}

let ram = {
  ramType: 'DDR4',
  ramVolume: 8192,
  ramFrequency: 3200,
};

console.log(getStringValue('123'));
console.log(
  getStringValue(function () {
    return new Date().getFullYear();
  })
);
console.log(getStringValue([1, 2, 3]));
console.log(getStringValue({}));
console.log(getStringValue(true));
