// способы записи строк
let singleQoute = 'Строка в одиночных кавычках';
let doubleQoute = 'Строка в двойных кавычках';
let tikQoute = `Строка в обратных кавычках`;

// многострочные строки
let multiLine1 = 'Строка\nc\nпереносами';
let multiKine2 = `Строка
с
переносами`;

// сложение (конгитинация)

let str1 = 'Первая строка';
let str2 = 'Вторая строка';

let contact = str1 + '/n' + str2; // Первая строка/nВторая строка

let tickContact = `${str1}
${str2}`; // Первая строка/nВторая строка

let greetings = 'Привет';
let name = 'Тимофей';
console.log(`${greetings}, ${name}! Добро пожаловать!`); // Привет, Тимофей! Добро пожаловать!

console.log(' "Кавычка в кавычках: \'"');
console.log("'Кавычка в кавычках: \"'");
console.log(` 'Кавычка в кавычках: \`'`);
console.log('Символ табуляции: \t');
console.log('Обратный слэш: \\');
console.log('\x31'); // цифра 1 в UTF-8 в hex
console.log('\u0031'); // цифра 1 в UTF-16 в hex
console.log('\u{1f354}'); // символ эмодзи гамбургер, код в UTF-32 в hex
