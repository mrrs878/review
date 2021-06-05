/*
 * @Date: 2021-06-05 13:49:05
 * @Author: mrrs878@foxmail.com
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2021-06-05 16:38:03
 * @FilePath: \review\src\algorithm\array.js
 */
const first = (arr) => arr[0];
const last = (arr) => arr[arr.length - 1];
function combineOrderedArrays(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) throw new TypeError('parameter must be an array');
  if (arr1.length === 0) return arr2;
  if (arr2.length === 0) return arr1;
  if (first(arr1) >= last(arr2)) return arr1.concat(arr2);
  if (first(arr2) >= last(arr1)) return arr2.concat(arr1);

  let index1 = arr1.length - 1;
  let index2 = arr2.length - 1;
  let index = arr1.length + arr2.length - 1;
  const res = [...arr1];
  while (index2 >= 0) {
    if (index1 < 0) {
      res[index] = arr2[index2];
      index -= 1;
      index2 -= 1;
    } else {
      if (arr2[index2] > arr1[index1]) {
        res[index] = arr2[index2];
        index2 -= 1;
      } else {
        res[index] = arr1[index1];
        index1 -= 1;
      }
      index -= 1;
    }
  }

  return res;
}

function sumOfTwoNumbers(src, target) {
  if (!Array.isArray(src)) throw new TypeError('src must be an Array');
  const tmp = new Map();
  for (let i = 0; i < src.length; i += 1) {
    const abs = target - src[i];
    if (tmp.has(abs)) return [tmp.get(abs), i];
    tmp.set(src[i], i);
  }
  return [];
}

function intersection(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) throw new TypeError('parameters must be both of Arrays');
  const tmp = new Set(arr1);
  const res = new Set();
  arr2.forEach((item) => {
    if (tmp.has(item)) res.add(item);
  });

  return Array.from(res);
}

export { combineOrderedArrays, sumOfTwoNumbers, intersection };
