function getJsonProperty(json, prop) {
  try {
    const obj = JSON.parse(json);
    return obj[prop];
  } catch (error) {
    switch (error.name) {
      case 'SyntaxError':
        console.log('Не удалось разобраит JSON строку');
        break;
      case 'TypeError':
        console.log('В JSON содердится пустое значение');
        break;
      default:
        throw error;
    }
  }
  return null;
}

getJsonProperty('я не Json', 'prop');
getJsonProperty('null', 'name');
