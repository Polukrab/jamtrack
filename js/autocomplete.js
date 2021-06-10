const autocomplete = (search, list) => {
  // Удаляет все лишнее из поискового запроса
  search.replace('/[^A-Za-z]/g', '');
  // Инициализирует переменную в которую будем писать результат поиска
  let result = [];
  // Инициализирует переменную для регулярки
  let regEx = null;
  // Ищет пока нужно и есть что искать
  while (!result.length && search.length) {
    // Шаблон поиска без учета регистра
    regEx = new RegExp('^' + search, 'i');
    // Результат по шаблону поиска
    result = list.filter(it => (regEx.test(it)));
    // Если нет совпадений укорачивает шаблон поиска
    if (!result.length) {
      search = search.slice(0, search.length - 1);
    }
  }
  // Возвращат результат
  return result.length > 5 ? (result.slice(0, 5)) : result;
}
