// 'https://swapi.dev/api/films/'

const cssPromises = {};

function loadResource(src) {
  // JS module
  if (src.endsWith('.js')) {
    return import(src);
  }
  // CSS файл
  if (src.endsWith('.css')) {
    if (!cssPromises[src]) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = src;
      cssPromises[src] = new Promise((resolve) => {
        link.addEventListener('load', () => resolve());
      });
      document.head.append(link);
    }
    return cssPromises[src];
  }

  // Данные сервера
  return fetch(src).then((res) => res.json());
}

const css =
  'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css';

const appContainer = document.getElementById('app');
const searchParams = new URLSearchParams(location.search);

const filmId = searchParams.get('filmId');

function renderPage(moduleName, api, css) {
  Promise.all([moduleName, api, css].map((src) => loadResource(src))).then(
    ([pageModule, data]) => {
      appContainer.innerHTML = '';
      appContainer.append(pageModule.render(data));
    }
  );
}

if (filmId) {
  renderPage('./film-data.js', `https://swapi.dev/api/films/${filmId}`, css);
} else {
  renderPage('./film-list.js', 'https://swapi.dev/api/films', css);
}
