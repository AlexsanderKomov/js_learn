const promise = new Promise((resolve) => {
  /* какой-то код */
  resolve(42);
});

(async () => {
  const x = await promise;
})();
