// let name = 'Sasha';

// function closereGreetings() {
//   console.log(name);
// }

// closereGreetings();

// function createIncrementor(n) {
//   return function (num) {
//     return n + num;
//   };
// }

// const addOne = createIncrementor(1);
// const addTwo = createIncrementor(40);

// console.log(addOne(10));
// console.log(addTwo(15));

function urlGenerate(domain) {
  return function (url) {
    return `https://${url}.${domain}`;
  };
}

const comUrl = urlGenerate('com');

console.log(comUrl('google'));
