// let name = 'Alexsander'
// let surname = 'Komov'
// let middle = 'Alexsanrovich'

// let me = {
//   name,
//   surname,
//   middle,
//   birthDate: { year: 1993, month: 3, day: 24},
//   accupation: 'Программист',
//   'property with spaces': null,
// }

// // создаем новое свойство объекта
// me.education = 'ВГУИТ'
// // изменяем свойство объекта
// me.accupation = 'Безработный'

// // теже действия со строками
// me['property with spaces'] = 456

// // удаляем свойство объекта
// delete me.education
// delete me['property with spaces']

// // получаем значение свойства
// let myName = me.name
// let myBirthYear = me.birthDate.year

// // пустой объект
// let emptyObj = {}

// function printObjProperty(obj, propName) {
//   console.log(obj[propName])
// }

//   let me = {
//   name: 'Alexsander',
//   surname: 'Komov',
//   middle: 'Alexsandrovich',
//   birthDate: { year: 1993, month: 3, day: 24},
//   accupation: 'Программист',
// }

// printObjProperty(me, 'surname')

// let me = {
//   birthDate: { year: 1993, month: 3, day: 24 },
//   getAge() {
//     let now = new Date();
//     let born = new Date(
//       this.birthDate.year,
//       this.birthDate.month + 1,
//       this.birthDate.day
//     );
//     let diffInMilliseconds = now.getTime() - born.getTime();
//     return Math.floor(diffInMilliseconds / 1000 / 60 / 60 / 24 / 365.25);
//   },
// };

// console.log(me.getAge());

// let name = '';
// let surname = '';

// function getFullName() {
//   return this.name + ' ' + this.surname;
// }

// let obj = { name, surname, getFullName };

// console.log(obj.getFullName());

// obj.whoAmI = function () {
//   console.log(`Меня зовут ${this.name} ${this.surname}`);
// };

// obj.whoAmI();

// delete obj.getFullName;

// ошибка, свойство уже не существует
// console.log(obj.getFullName());

// добавляем функцию другому объекту 2 раза с разными названиями
// let otherObj = {
//   someMethod: getFullName,
// };
// otherObj.someOtherMethod = getFullName;

// меня зовут undefined
// console.log(otherObj.someMethod());
// console.log(otherObj.someOtherMethod());

// соединение объектов
// let motherBoard = {
//   usbPortCount: 8,
//   chipset: 'AMD X570',
//   socket: 'AM3/AM4',
// };

// let cpu = {
//   coreCount: 8,
//   cpuManufacturer: 'AMD',
//   socket: 'AM4',
// };

// let videoCard = {
//   videoCardModel: 'NVidia GeForce GTX 1060',
//   videoMemory: 4096,
// };

// let ram = {
//   ramType: 'DDR4',
//   ramVolume: 8192,
//   ramFrequency: 3200,
// };

// let computer = {
//   price: 100000,
//   ...motherBoard,
//   ...cpu,
//   ...videoCard,
//   ...ram,
// };

// let computerWithAssign = Object.assign(
//   // целевой объект, в который будут "замешаны" следующие
//   {
//     price: 10000,
//   },
//   // объекты, "подмешиваемые" в первый
//   motherBoard,
//   cpu,
//   videoCard,
//   ram
// );

// console.log(computer);
// console.log(computerWithAssign);

// получение значений объекта

// let computer = {
//   price: 100000,
//   ...motherBoard,
//   ...cpu,
//   ...videoCard,
//   ...ram,
// };

// console.log(Object.keys(computer));
// console.log(Object.values(computer));
// console.log(Object.entries(computer));

// передача по ссылке
// let digit = 20;
// let otherDigit = digit;

// исходное значение не меняется, так как otherDigit копирует значение из digit
// otherDigit += 5;

// digit 20, otherDigit 25

// let obj = {
//   model: 'VW Polo',
// };
// let otherObj = obj;

// obj и otherObj ссылаются на один же объект, поэтому свойство поменяется и там, и там
// otherObj.model = 'Volkswagen Polo';

// сравнение объектов
// obj1 и obj2 - ссылки на один и от же объект...
// let obj1 = {
//   name: 'Какой-то объект',
// };
// let obj2 = obj1;

// ...и они рывны
// console.log(obj1 === obj2);

// obj2 становится ссылкой на новый объект, хоть и с такими же свойствами
// obj2 = {
//   name: 'Какой-то объект',
// };

// и теперь obj1 и obj2 - ссылки на разные объекты, то есть они не равны
// console.log(obj1 === obj2);

// asign-ref

// let me = {
//   name: 'Саша',
// };

// функция вернет получившийся объект, но это будет тот же объект,
// который мы передали в первый аргумент, то есть она ихменит объект me и вернет его
// let newMe = Object.assign(me, { name: 'Не Саша' }, { surname: 'Не Комов' });

// me и newMe - один и тот же объект, и мы его изменили
// console.log(newMe);
// console.log(me);

// console.log(me === newMe); // true

// избегаем копирования объекта
// let me = {
//   name: 'Sasha',
// };

// подмешиваем свойства в свежесозданый пустой объект...
// let newMe = Object.assign(
//   {},
//   me,
//   { name: 'Not Sasha' },
//   { surname: 'Not Komov' }
// );
// ...или делаем то же самое с помощью spread
// let newMeWithSpread = { ...me, name: 'Not Sasha', surname: 'Not Komov' };

// исходный объект остался нетронутым
// console.log(me);
// console.log(newMe);

// циклы объектов
// let motherBoard = {
//   usbPortCount: 8,
//   chipset: 'AMD X570',
//   socket: 'AM3/AM4',
// };

// let cpu = {
//   coreCount: 8,
//   cpuManufacturer: 'AMD',
//   socket: 'AM4',
// };

// let videoCard = {
//   videoCardModel: 'NVidia GeForce GTX 1060',
//   videoMemory: 4096,
// };

// let ram = {
//   ramType: 'DDR4',
//   ramVolume: 8192,
//   ramFrequency: 3200,
// };

// let computer = {
//   price: 100000,
//   ...motherBoard,
//   ...cpu,
//   ...videoCard,
//   ...ram,
// };

// let keys = Object.keys(computer);
// let values = Object.values(computer);
// let entries = Object.entries(computer);

// console.log('Value\n');

// for (let value of values) {
//   console.log(value);
// }

// console.log('\nKey\n');

// for (let key of keys) {
//   console.log(`${key}: ${computer[key]}`);
// }
// console.log('\nEntry\n');

// for (let entry of entries) {
//   console.log(`${entry[0]}: ${entry[1]}`);
// }
// console.log('\nEntry2\n');

// // так же, но более читаемо
// for (let [key, value] of entries) {
//   console.log(`${key}: ${value}`);
// }

// // старый способ но может встретиться
// for (let key in computer) {
//   if (!computer.hasOwnProterty(key)) {
//     continue;
//   }
//   console.log(computer[key]);
// }

// let digits = [1, 2, 3, 4, 5];

// console.log(Object.values(digits));
// console.log(Object.keys(digits));
// console.log(Object.entries(digits));
