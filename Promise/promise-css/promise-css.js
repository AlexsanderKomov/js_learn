let cssPromise = null;

function loadModalCss() {
  if (cssPromise) return;
  cssPromise = new Promise((resolve) => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = './modal.css';
    link.addEventListener('load', () => {
      resolve();
    });
    document.head.append(link);
    cssLoaded = true;
  });
  return cssPromise;
}

async function askConfirmation(text = 'Вы уверены?') {
  await loadModalCss();

  return new Promise((resolve) => {
    const root = document.createElement('div');
    const win = document.createElement('div');
    const paragraph = document.createElement('p');
    const btnYes = document.createElement('button');
    const btnNo = document.createElement('button');
    root.classList.add('modal-root');
    win.classList.add('modal-win');

    root.append(win);
    win.append(paragraph);
    win.append(btnYes);
    win.append(btnNo);
    document.body.append(root);

    paragraph.textContent = text;
    btnYes.textContent = 'Да';
    btnNo.textContent = 'Нет';

    btnYes.addEventListener('click', () => {
      resolve(true);
      root.remove();
    });

    btnNo.addEventListener('click', () => {
      resolve(false);
      root.remove();
    });
  });
}

document
  .getElementById('open-modal-button')
  .addEventListener('click', async () => {
    const confirmed = await askConfirmation();
    console.log(confirmed);
  });
