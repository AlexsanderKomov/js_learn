async function getData() {
  let res = await fetch('https://gorest.co.in/public/v1/posts');
  return await res.json();
}

let list = await getData();

console.log(list);

function createList(data) {
  let list = document.createElement('ul');
  for (const item of data) {
    let listItem = document.createElement('li');
    let listLink = document.createElement('a');
    listLink.textContent = item.title;
    listLink.href = `post.html?post_id=${item.id}`;

    listItem.append(listLink);
    list.append(listItem);
  }
  document.body.append(list);
}

createList(list.data);
