class Student {
  constructor(name, surname, educationStartDate) {
    this.name = name;
    this.surname = surname;
    this.educationStartDate = educationStartDate || new Date();
  }
}

const students = [
  new Student('Саша', 'Комов'),
  new Student('Василий', 'Пупкин', new Date(2022, 8, 1)),
];

// экземпляр класса, class instanse
