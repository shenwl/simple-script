export function flat(arr) {
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

export function isContain(arr, subArr) {
  if (!Array.isArray(arr) || !Array.isArray(subArr)) return false;
  for (let item of subArr) {
    if (!arr.includes(item)) {
      return false;
    }
  }
  return true;
}

export function deepContain(arr, subArr) {
  if (!Array.isArray(arr) || !Array.isArray(subArr)) return false;

  for (let item of subArr) {
    if (Array.isArray(item)) {
      if (!arr.some(sonArr => isContain(sonArr, item))) {
        return false;
      }
    } else if (!arr.includes(item)) {
      return false;
    }
  }
  return true;
}