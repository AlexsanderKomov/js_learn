(async () => {
  const result = await fetch('/api/users');
  const json = await result.json();
  console.log(json);
})();
