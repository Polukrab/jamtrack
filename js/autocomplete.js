const autocomplete = (search, list) => {
  // Удалим все лишнее из поискового запроса
  // Фильтр может быть модифицирован под конкретную задачу, для задачи в тесте дотаточно такого.
  search.replace('/[^A-Za-z]/g', '');
  // Инициализируем переменную в которую будем писать результат поиска
  let result = [];
  // Инициализируем переменную для регулярки
  let regEx = null;
  // Ищим пока нужно и есть что искать
  while (!result.length && search.length) {
    regEx = new RegExp('^' + search, 'i');
    // Формируем результат по шаблону поиска
    result = list.filter(it => (regEx.test(it)));
    // Если нет совпадений упрощаем критерий поиска
    if (!result.length) {
      search = search.slice(0, search.length - 1);
    }
  }
  // Возвращаем результат
  return result.length > 5 ? (result.slice(0, 5)) : result;
}
