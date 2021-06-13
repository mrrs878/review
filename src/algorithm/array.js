/*
 * @Date: 2021-06-05 13:49:05
 * @Author: mrrs878@foxmail.com
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2021-06-13 22:59:03
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

function triangleNumber(array) {
  function isTriangle(a, b, c) {
    return a + b > c && a + c > b && c + b > a;
  }
  let num = 0;
  for (let i = 0; i < array.length; i += 1) {
    for (let j = i + 1; j < array.length; j += 1) {
      for (let k = j + 1; k < array.length; k += 1) {
        num += isTriangle(array[i], array[j], array[k]) ? 1 : 0;
      }
    }
  }
  return num;
}

function minDistance(word1, word2) {
  if (word1 === '' && word2 === '') return 0;

  let small = '';
  let bigger = '';
  if (word1.length >= word2.length) {
    small = word2;
    bigger = word1;
  } else {
    small = word1;
    bigger = word2;
  }
  let indexStart = -1;
  let indexEnd = -1;

  for (let i = small.length; i >= 0; i -= 1) {
    for (let j = 0; j + i <= small.length; j += 1) {
      const reg = new RegExp(small.slice(j, i));
      if (reg.test(bigger)) {
        indexStart = j;
        indexEnd = i - 1;
        break;
      }
    }
    if (indexStart !== -1) break;
  }
  const length = (indexEnd - indexStart + 1);
  return word1.length - length + word2.length - length;
}

function minArray(numbers) {
  if (numbers.length === 1) return numbers[0];
  let pre = numbers[0];
  for (let i = 1; i < numbers.length; i += 1) {
    if (pre > numbers[i]) return numbers[i];
    pre = numbers[i];
  }
  return numbers[0];
}

function fib(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  if (n === 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

function fibPerform(num) {
  function fibImpl(m, n, x) {
    if (x === 0) return m;
    return fibImpl(n, m + n, x - 1);
  }

  return fibImpl(0, 1, num);
}

function exchange(numbers) {
  if (numbers.length <= 1) return numbers;
  const tmp = [];
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 2 === 1) tmp.unshift(numbers[i]);
    else tmp.push(numbers[i]);
  }

  return tmp;
}

export {
  combineOrderedArrays, sumOfTwoNumbers, intersection, triangleNumber, minDistance,
  minArray, fib, fibPerform, exchange,
};
