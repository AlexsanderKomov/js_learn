let x = 0;

if (Math.random() > 0.5) {
  x = 10;
} else {
  x = 20;
}

// тоже самое

x = Math.random() > 0.5 ? 10 : 20;

console.log(x);
// плохой пример

let age = 23;
let isAdilt = age > 18 ? true : false;

// хороший пример

let isAdiltDoneRight = age > 18;
