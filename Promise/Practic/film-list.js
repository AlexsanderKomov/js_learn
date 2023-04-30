export function render(data) {
  const container = document.createElement('div');

  container.classList.add(
    'container',
    'd-flex',
    'justify-content-between',
    'flex-column',
    'py-4'
  );

  for (const film of data.results) {
    const filmCard = document.createElement('div');
    const name = document.createElement('h4');
    const episode = document.createElement('p');
    const producer = document.createElement('p');
    const director = document.createElement('p');
    const link = document.createElement('a');

    filmCard.append(name);
    filmCard.append(episode);
    filmCard.append(producer);
    filmCard.append(director);
    filmCard.append(link);

    name.textContent = film.title;
    episode.textContent = film.episode_id;
    producer.textContent = film.producer;
    director.textContent = film.director;
    link.textContent = 'about';
    link.href = `?filmId=${film.episode_id}`;

    container.append(filmCard);
  }

  return container;
}
