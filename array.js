let alphabet = [];

// добавить в конец массива
alphabet.push('Г');
alphabet.push('Д');
alphabet.push('Е', 'Ж', 'З');

// добавить в начало
alphabet.unshift('В');
alphabet.unshift('А', 'Б');

console.log(alphabet[alphabet.length - 1]);

alphabet.length; // 8

// массив с вариантами приветствий
let greetings = ['hello', 'good morning', 'good evning', 'good afternoon'];

console.log(greetings[2]);

greetings[2] = 'good evening';

console.log(greetings[2]);
