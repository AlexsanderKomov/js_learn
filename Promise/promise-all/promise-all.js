function fetchJson(url) {
  //   const res = await fetch(url);
  //   return await res.json();
  return fetch(url).then((res) => res.json());
}

function getPostData(id) {
  return Promise.all([
    fetchJson(`/api/post/${id}`),
    fetchJson(`/api/post/${id}/comments`),
    fetchJson(`/api/profile`),
  ]).then(([post, comments, profile]) => {
    return { post, comments, profile };
  });

  //   const post = await fetchJson(`/api/post/${id}`);
  //   const comments = await fetchJson(`/api/post/${id}/comments`);
  //   const profile = await fetchJson(`/api/profile`);
}

(async () => {
  const data = await getPostData(1);
})();
