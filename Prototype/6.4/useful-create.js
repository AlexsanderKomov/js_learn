const me = Object.create(
  {
    getFullName() {
      return `${this.name} ${this.surname}`;
    },
  },
  {
    name: {
      value: 'Sasha',
      writable: true,
      enumerable: true,
      configurable: true,
    },
    surname: {
      value: 'Komov',
      writable: true,
      enumerable: true,
      configurable: true,
    },
  }
);

me.getFullName();
