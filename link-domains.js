function getPageLinkDomains() {
  // Array.from создвет массив из массивоподобных структур. getElementsByTagName как развернет
  // структуру, которая похожа на массив, но не является полноценным массивои, то есть не имеет
  // тех самых методов массива, о которых мы говорим. Array.from как раз решает эту проблему
  return (
    Array.from(document.getElementsByName('a'))
      // преобразуем массив с DOM-элементами ссылок в строки с доменом из атрибута href
      .map((link) =>
        link.href
          // убираем протокол (http://, https://)
          .replace('http://', '')
          .replace('https://', '')
          // убираем www, теперь в начале строки остался только домен
          .replace('www', '')
          // делим оставшуюся часть по слэшу, чтобы отделить домен от остальной часть ссылки
          .split('/')
          // забираем первый элемент получившегося массива, то есть домен
          .shift()
      )
      .reduce((uniqueDomains, domain) => {
        // возвращаем массив без изменений, если в нем уже есть этот домен
        if (uniqueDomains.includes(domain)) return uniqueDomains;
        // в противном случае возвращаем новый массив с добавленным в него доменом
        return [...uniqueDomains, domain];
      }, [])
  );
}
