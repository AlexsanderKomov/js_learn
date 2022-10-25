function checkAge(age) {
  console.log(`Вам ${age} лет`);
  if (age >= 18) return;
  console.log('Школота!');
  console.log(`Потерпи еще ${18 - age} лет до совершеннолетия`);
}

checkAge(2);
checkAge(20);
checkAge(18);
