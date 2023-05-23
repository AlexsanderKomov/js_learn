import { Card } from './card.js';

export class AmazingCard extends Card {
  set number(value) {
    this._number = value;
    const arrayImg = [
      '../img/1.jpg',
      '../img/2.jpg',
      '../img/3.jpg',
      '../img/4.jpg',
      '../img/5.jpg',
      '../img/6.jpg',
      '../img/7.png',
      '../img/8.jpg',
    ];

    const img = document.createElement('img');
    img.src = arrayImg[value - 1];
    img.alt = `картинка ${value - 1}`;
    console.log(this._proto_.cardItem);
    this.cardItem.append(img);
  }

  get number() {
    return this._number;
  }
}
