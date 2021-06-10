const addDashes = (num) => {
  // Приводим тип аргумента к string.
  num += '';
  // Можно решить разными способами, но так как в задинии не оговорено,
  // то использую regexp
  const regEx = /([13579])(?=[02468])|([02468])(?=[13579])/g;
  return (num.replace(regEx, '$&-'));
}
