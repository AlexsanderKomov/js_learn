async function getData(id) {
  let res = await fetch(`https://gorest.co.in/public/v1/posts/${id}`);
  return await res.json();
}

let URLData = new URLSearchParams(window.location.search);

let id = URLData.get('post_id');

let postData = await getData(id);

console.log(postData);

function createPost(post) {
  let h2 = document.createElement('h2');
  let content = document.createElement('p');
  h2.textContent = post.title;
  content.textContent = post.body;
  document.title = post.title;
  document.body.append(h2);
  document.body.append(content);
}

createPost(postData.data);
