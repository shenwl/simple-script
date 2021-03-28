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

export function isEqualArray(arr1, arr2) {
  if (!arr1 || !arr2 || arr1.length !== arr2.length) return false;
  const arr2Copy = [...arr2];
  for (let item of arr1) {
    const i = arr2Copy.indexOf(item);
    if (i < 0) {
      return false;
    }
    arr2Copy[i] = null;
  }
  return true;
}

/**
 * 二维数组去重
 * @param {*} arr 二维数组
 */
export function uniqueArrays(arr) {
  if (!arr) return [];
  const result = [];

  const isValid = (subArr) => {
    for (let arr of result) {
      if (isEqualArray(arr, subArr)) {
        return false;
      }
    }
    return true;
  }

  arr.forEach(sub => {
    if (isValid(sub)) {
      result.push(sub);
    }
  });
  return result;
}