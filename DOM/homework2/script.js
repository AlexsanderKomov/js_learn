document.addEventListener('DOMContentLoaded', function () {
  let input = document.createElement('input');
  document.body.append(input);
  let h2 = document.createElement('h2');
  document.body.append(h2);

  let inp = document.querySelector('input');
  let title = document.querySelector('h2');

  let interval;

  inp.addEventListener('input', function () {
    clearTimeout(interval);
    interval = setTimeout(copy, 300);
  });

  function copy() {
    title.textContent = inp.value;
  }
});
