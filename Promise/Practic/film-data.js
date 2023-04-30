export function render(data) {
  const container = document.createElement('div');
  container.classList.add(
    'container',
    'd-flex',
    'justify-content-between',
    'flex-column',
    'py-4'
  );

  container.innerHTML = `
    <h1>Назнание эпизода ${data.title}</h1>
    <p>${data.opening_crawl}</p>
    ${data.planets.map((planets) =>
      fetch(planets)
        .then((res) => res.json())
        .then((planets) => `<p>${planets.name}</p>`)
    )}
    `;

  return container;
}
