export class Card {
  _open = false;
  _success = false;

  constructor(container, flip, number) {
    this.number = number;

    this.cardItem = document.createElement('li');
    this.cardItem.classList.add('item');
    this.cardItem.textContent = number;

    this.cardItem.addEventListener('click', () => {
      if (!this.open && !this.success) {
        this.open = true;
        flip(this);
      }
    });

    container.append(this.cardItem);
  }

  // createElement() {
  //   const cardItem = document.createElement('li');
  //   cardItem.classList.add('item');
  //   cardItem.textContent = this.number;

  //   cardItem.addEventListener('click', () => {
  //     if (!this.open && !this.success) {
  //       this.open = true;
  //       this.open
  //         ? cardItem.classList.add('item-active')
  //         : cardItem.classList.remove('item-active');
  //       this.flip(this);
  //     }
  //   });
  //   this.container.append(cardItem);
  // }

  set number(value) {
    this._number = value;
  }

  get number() {
    return this._number;
  }

  set open(value) {
    this._open = value;
    value
      ? this.cardItem.classList.add('item-active')
      : this.cardItem.classList.remove('item-active');
  }

  get open() {
    return this._open;
  }

  set success(value) {
    this._success = value;
    value
      ? this.cardItem.classList.add('item-success')
      : this.cardItem.classList.remove('item-success');
  }

  get success() {
    return this._success;
  }
}
