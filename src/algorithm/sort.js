/*
 * @Date: 2021-06-13 17:55:11
 * @Author: mrrs878@foxmail.com
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2021-06-13 21:44:52
 * @FilePath: \review\src\algorithm\sort.js
 */
export function bubbleSort(arr) {
  const arrTmp = arr;
  for (let i = 0; i < arrTmp.length; i += 1) {
    for (let j = 0; j < arrTmp.length - i - 1; j += 1) {
      if (arrTmp[j] > arrTmp[j + 1]) {
        const tmp = arrTmp[j];
        arrTmp[j] = arrTmp[j + 1];
        arrTmp[j + 1] = tmp;
      }
    }
  }

  return arrTmp;
}

export function quickSort(src) {
  function partition(sub, left, right) {
    const base = sub[Math.floor(Math.random() * (right - left + 1)) + left];
    let i = left;
    let j = right;

    while (i <= j) {
      while (sub[i] < base) i += 1;
      while (base < sub[j]) j -= 1;
      if (i <= j) {
        const tmp = sub[i];
        // eslint-disable-next-line no-param-reassign
        sub[i] = sub[j];
        // eslint-disable-next-line no-param-reassign
        sub[j] = tmp;
        i += 1;
        j -= 1;
      }
    }

    return i;
  }
  function perform(arr, left, right) {
    let index = 0;
    if (left < right) {
      index = partition(arr, left, right);
      if (left < index - 1) {
        perform(arr, left, index - 1);
      }
      if (index < right) {
        perform(arr, index, right);
      }
    }
  }

  return perform(src, 0, src.length - 1);
}
