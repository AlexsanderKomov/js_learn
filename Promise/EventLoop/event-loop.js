while (true) {
  // Висим пока не появится задача
  waitForTask();
  // выполняем задачу
  executeTask();
  // и все по новой
}
