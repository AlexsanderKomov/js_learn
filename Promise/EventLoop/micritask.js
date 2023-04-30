// console.log('1');
// setTimeout(() => console.log('4'));
// queueMicrotask(() => console.log('3'));
// console.log('2');

// console.log('1');
// setTimeout(() => console.log('6'));
// const promise = new Promise((resolve) => {
//   console.log('2');
//   resolve();
// });
// promise.then(() => console.log('4'));
// queueMicrotask(() => console.log('5'));
// console.log('3');

console.log('1');
setTimeout(() => console.log('6'));
(async () => {
  const promise = new Promise((resolve) => {
    console.log('2');
    resolve();
  });
  await promise;
  console.log('4');
})();
queueMicrotask(() => console.log('5'));
console.log('3');
