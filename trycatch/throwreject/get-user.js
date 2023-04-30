async function getUser(id) {
  const res = await fetch(`https://api.escuelajs.co/api/v1/users/${id}`);
  const data = await res.json();
  if (data.statusCode !== 200) {
    const error = new Error('Не удалось получить объект пользователя из API');
    error.statusCode = data.statusCode;
    throw error;
  }
  return data;
}

getUser(7).then((user) => console.log(user));
getUser('asdfasdfsdf')
  .then((user) => console.log(user))
  .catch((error) =>
    console.log(
      `Не удалось получить пользователя, код ошибки: ${error.statusCode}`
    )
  );
