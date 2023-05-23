const me = {
  name: 'Sasha',
  surname: 'Komov',
};

const methods = {
  getFullName() {
    return `${this.name} ${this.surname}`;
  },
};

Object.setPrototypeOf(me, methods);
