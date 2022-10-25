// получение абсолютного (положительного) значения числа
Math.abs(-20); // 20
Math.abs(20); // 20

// числа PI, синус, косинус, тангенс, арктангенс
Math.sin(Math.PI / 2); // 1, синус 90 градусов
Math.cos(Math.PI * 2); // 1, косинус 360 градусов
Math.tan(0); // 0, тангенс 0 градусов
Math.atan(0); // 0, арктангенс 0 градусов

// натуральный логарифм (ln)
Math.log(Math.E); // 1

// округление
Math.round(3.8); // 4
Math.round(3.2); // 3
Math.round(3.5); // 4
Math.floor(3.9); // 3, округление вниз
Math.ceil(3.2); // 4, округление вверх

// наибольшее и наимегьшее число
Math.max(10, 1, -40, 12, 5); // 12
Math.min(10, 1, -40, 12, 5); // -40

// возведение в спетень
Math.pow(10, 3);
10 ** 3;
Math.sqrt(16);
Math.pow(16, 0.5);

// случайные числа
Math.random();
Math.round(Math.random() * 100); // случайное число от 0 до 100
Math.round(Math.random() * 70) + 50; // случайное число от 70 до 120
