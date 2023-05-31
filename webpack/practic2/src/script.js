import { el, setChildren, mount } from 'redom';
import Inputmask from 'inputmask';

const valid = require('card-validator');
const validator = require('email-validator');

function createContainer() {
  const container = el('.container', {
    id: 'container',
  });

  setChildren(container, createForm());
  return container;
}

function createItemForm(selectorName, text = 'Отправить', type) {
  if (selectorName === 'input') {
    return el(
      'div',
      {
        class: 'w-50 mb-2 position-relative',
      },
      el('input', {
        type: type,
        placeholder: text,
        class: ' p-2 w-100',
      })
    );
  } else {
    return el(
      'button',
      {
        type: 'submit',
        class: 'btn btn-primary',
      },
      text
    );
  }
}

function disable(obj, btn) {
  for (const boolean of Object.values(obj)) {
    if (!boolean) {
      btn.disabled = true;
      return;
    } else {
      btn.disabled = false;
    }
  }
}

function createCardType(cardType) {
  const type = el(
    'p',
    {
      id: 'type-card',
      class: 'position-absolute ',
      style: 'left: -50px; top: 10px',
    },
    cardType
  );
  return type;
}

function createForm() {
  const form = el('form', {
    action: '#',
    class:
      'form d-flex align-items-center justify-content-center mt-5 flex-column',
  });

  const disableBtn = {
    number: false,
    cardTerm: false,
    cardCVV: false,
    email: false,
  };

  const maskNumber = new Inputmask('9999 9999 9999 9999 99');
  const maskTerm = new Inputmask('99/99');
  const maskCVV = new Inputmask('999');

  const number = createItemForm('input', 'Введите номер карты', 'text'),
    cardTerm = createItemForm('input', 'Введите срок действия карты', 'text'),
    cardCVV = createItemForm(
      'input',
      'Введите 3 цифры на обратной стороне карты',
      'text'
    ),
    email = createItemForm('input', 'Введите почту', 'email'),
    btn = createItemForm('button', 'Оплатить', 'submit');

  btn.disabled = true;

  maskNumber.mask(number.children[0]);
  maskTerm.mask(cardTerm.children[0]);
  maskCVV.mask(cardCVV.children[0]);

  number.children[0].addEventListener('blur', (e) => {
    const value = e.target.inputmask.unmaskedvalue();
    const numberValidator = valid.number(value);

    if (value.length >= 2) {
      const typeCard = createCardType(numberValidator.card.type);
      mount(number, typeCard);
    } else if (value.length < 2) {
      if (document.getElementById('type-card')) {
        document.getElementById('type-card').remove();
      }
    }

    if (value.length === 16 || value.length === 18) {
      if (numberValidator.isPotentiallyValid) {
        e.target.classList.remove('border-danger');
        disableBtn.number = true;
        disable(disableBtn, btn);
      }
    } else {
      e.target.classList.add('border-danger');
      disableBtn.number = false;
      disable(disableBtn, btn);
    }
  });

  cardTerm.children[0].addEventListener('blur', (e) => {
    const value = e.target.inputmask.unmaskedvalue();

    if (value.length < 4) {
      e.target.classList.add('border-danger');
      disableBtn.cardTerm = false;
      disable(disableBtn, btn);
    } else {
      e.target.classList.remove('border-danger');
      disableBtn.cardTerm = true;
      disable(disableBtn, btn);
    }

    if (value.length === 4) {
      const mouthValidator = valid.expirationMonth(
        value.split('').splice(0, 2).join('')
      );
      const yearValidator = valid.expirationYear(
        value.split('').splice(2, 2).join('')
      );

      if (
        +value.split('').splice(0, 2).join('') - 1 <= new Date().getMonth() &&
        20 + value.split('').splice(2, 2).join('') <= new Date().getFullYear()
      ) {
        e.target.classList.add('border-danger');
        disableBtn.cardTerm = false;
        disable(disableBtn, btn);
      } else if (
        mouthValidator.isPotentiallyValid &&
        yearValidator.isPotentiallyValid
      ) {
        e.target.classList.remove('border-danger');
        disableBtn.cardTerm = true;
        disable(disableBtn, btn);
      } else {
        e.target.classList.add('border-danger');
        disableBtn.cardTerm = false;
        disable(disableBtn, btn);
      }
    }
  });

  cardCVV.children[0].addEventListener('blur', (e) => {
    const value = e.target.inputmask.unmaskedvalue();
    const cvvValidator = valid.cvv(value);

    if (cvvValidator.isValid) {
      e.target.classList.remove('border-danger');
      disableBtn.cardCVV = true;
      disable(disableBtn, btn);
    } else {
      e.target.classList.add('border-danger');
      disableBtn.cardCVV = false;
      disable(disableBtn, btn);
    }
  });

  email.children[0].addEventListener('blur', (e) => {
    if (validator.validate(e.target.value)) {
      e.target.classList.remove('border-danger');
      disableBtn.email = true;
      disable(disableBtn, btn);
    } else {
      e.target.classList.add('border-danger');
      disableBtn.email = false;
      disable(disableBtn, btn);
    }
  });

  setChildren(form, [number, cardTerm, cardCVV, email, btn]);

  return form;
}

function app() {
  setChildren(document.body, createContainer());
}

app();
