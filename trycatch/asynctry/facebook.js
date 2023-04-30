// (async () => {
//   try {
//     // 2.1             1.1
//     const res = await fetch('https://vk.com');

//     console.log('После получения ответа от VK');
//     // 3.1             2.2
//     const data = await res.json();

//     console.log('После получения тела ответа');
//   } catch (error) {
//     console.log(`Не удалось получить ответ от VK: ${error.message}`);
//   }
// })();

// fetch('https://vk.com')
//   .then((res) => {
//     console.log('После получения ответа от VK');
//     return res.text();
//   })
//   .then((data) => {
//     console.log('После получения тела ответа');
//     return data;
//   })
//   .catch((error) => {
//     console.log(`Не удалось получить ответ от VK: ${error.message}`);
//     return { title: 'И без ответа справися' };
//   })
//   .then((arg) => console.log(arg));

fetch('https://vk.com')
  .then((res) => {
    console.log('После получения ответа от VK');
    return res.text();
  })
  .then((data) => {
    console.log('После получения тела ответа');
    return data;
  })
  .finally(() => {
    console.log('Окончание загрузки');
  });

try {
} finally {
}
// 1.2
console.log('Начало загрузки');
