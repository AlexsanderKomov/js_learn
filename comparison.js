// number

let x = 10;
let y = 20;

console.log(x === y); // false
console.log(x === 10); // true

console.log(x !== y); // true
console.log(y !== 20); // false

console.log(x > y); // false
console.log(x < y); // true

console.log(x >= y); // false
console.log(x <= y); // true

// boolean, string

true === true; // true
true !== true; // false
true === false; // false
true !== false; // true

'строка' === 'строка'; // true
'строка' === 'строка'; // true
`строка` === `строка`; // true

('строка' === 'строка') === `строка`; // true

'строка1' !== 'строка2'; // true

// === и !== всегда вернет false при сравнении разных типов
false !== 0;
true !== 1;
0 !== '';
3 !== '3';
false !== '';
true !== 'true';

//  сравнение строк происходит посимвольно по кодам символа, усновно "по алфавиту"
'z' > 'a'; // 122 > 97
'az' > 'axzzz'; // a === a, z > a
'z' > 'Z'; // 122 > 90
'10' < '5';
'10' > '05';

// сравнение с boolean всегда сводится к сравнению чисел

1 > false;
0 < true;
'10' > true; // true, 10 > 1
'1' > true; // false
'1' > false; // true
'x' > true; // false, NaN > 1
