(() => {
  const studentsList = [];

  const studForm = document.querySelector('.form-add');
  const formValueFullName = document.querySelector('.form-add__input-full');
  const formValueFaculty = document.querySelector('.form-add__input-faculty');
  const formValueBD = document.querySelector('.form-add__input-hb');
  const formValueStartEducation = document.querySelector(
    '.form-add__input-start-education'
  );
  const studFilter = document.querySelector('.filter');

  // создаем карточку
  function createItem(obj) {
    const item = document.createElement('tr');
    const fio = document.createElement('td');
    const faculty = document.createElement('td');
    const birthDay = document.createElement('td');
    const yearsOfEducation = document.createElement('td');

    item.className = 'table__row';
    fio.className = 'table__content';
    fio.textContent = obj.name;
    faculty.className = 'table__content';
    faculty.textContent = obj.faculty;
    birthDay.className = 'table__content';
    birthDay.textContent = obj.birthDay();
    yearsOfEducation.className = 'table__content';
    yearsOfEducation.textContent = obj.yearsStartEduc();

    item.append(fio);
    item.append(faculty);
    item.append(birthDay);
    item.append(yearsOfEducation);

    return item;
  }

  function splitFullName(fullName = formValueFullName.value) {
    return fullName
      .split('\n')
      .filter((line) => line.trim().length > 0)
      .map((line) => {
        const [name, surname, middleName] = line
          .split(' ')
          .map((str) => str.trim())
          .filter((text) => text.length > 0);

        return {
          name,
          surname,
          middleName,
        };
      });
  }

  // проверка на заполняемость вводов значения
  function validate(selector, name) {
    const input = document.querySelectorAll(`.${name}__input`);

    selector.addEventListener('submit', (e) => {
      e.preventDefault();
      for (const item of input) {
        if (item.value.trim() === '') {
          item.style.borderColor = 'red';
        }
        item.addEventListener('input', () => {
          item.style.borderColor = 'black';
        });
      }
    });
  }

  validate(studForm, 'form-add');
  validate(studFilter, 'filter');

  function newStudent(fullName) {
    const student = {
      name: fullName['name'],
      surname: fullName['surname'],
      middleName: fullName['middleName'],
      birthDay() {
        let age =
          new Date().getFullYear() - formValueBD.valueAsDate.getFullYear();
        let yyyy = formValueBD.valueAsDate.getFullYear();
        let mm = formValueBD.valueAsDate.getMonth() + 1;
        let dd = formValueBD.valueAsDate.getDate();
        if (mm < 10) mm = '0' + mm;
        if (dd < 10) dd = '0' + dd;
        return `${dd}-${mm}-${yyyy} (${age} лет)`;
      },
      yearsStartEduc() {
        let year = formValueStartEducation.valueAsDate.getFullYear();
        if (
          formValueStartEducation.valueAsDate.getMonth() + 1 >= 9 &&
          new Date().getFullYear() - year > 4
        ) {
          return `${year}-${year + 4} (Закончил)`;
        } else {
          return `${year}-${year + 4} (${
            new Date().getFullYear() - year
          } курс)`;
        }
      },
      faculty: formValueFaculty.value,
    };
    return student;
  }

  studForm.addEventListener('submit', () => {
    document
      .querySelector('.table__list')
      .append(createItem(newStudent(splitFullName())));
    studentsList.push(newStudent(splitFullName()));
    console.log(splitFullName());
  });
})();
