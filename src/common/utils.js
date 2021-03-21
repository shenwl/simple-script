export function flatMap(arr) {
  if (!Array.isArray(arr)) return arr;
  const result = [];

  const loop = (list) => {
    list.forEach(item => {
      if (Array.isArray(item)) {
        return loop(item);
      }
      result.push(item);
    })
  }

  loop(arr);

  return result;
}