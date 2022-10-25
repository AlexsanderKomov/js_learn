let fibo = [1, 1];

// fibo.push(1);
// fibo.push(1);
// fibo.push(2); // 1 + 1
// fibo.push(3); // 1 + 2
// fibo.push(5); // 2 + 3
// fibo.push(8); // 3 + 5
// fibo.push(13); // 5 +8

for (let i = 1; i < 49; i++) {
  fibo.push(fibo[i] + fibo[i - 1]);
}

console.log(fibo);
