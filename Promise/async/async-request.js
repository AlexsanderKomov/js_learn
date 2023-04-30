async function loadPostList() {
  const res = await fetch('https://swapi.dev/api/films/');
  const list = await res.json();
  console.log(list.results);
  document.body.innerHTML = list.results.map((item) => item.title).join('<br>');
}

loadPostList();
document.body.textContent = 'Loading...';
