/*
 * @Date: 2021-06-05 14:24:41
 * @Author: mrrs878@foxmail.com
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2021-06-05 15:37:16
 * @FilePath: \review\src\algorithm\array.test.js
 */
import { combineOrderedArrays, sumOfTwoNumbers, intersection } from './array';

describe('array problems', () => {
  test('combineOrderedArrays', () => {
    const arr1 = [1, 3, 4];
    const arr2 = [2, 2, 5, 6];
    const res = combineOrderedArrays(arr1, arr2);
    expect(res).toEqual(arr1.concat(arr2).sort((a, b) => a - b));
  });

  test('sumOfTwoNumbers', () => {
    const arr = [1, 2, 6, 9, 5];
    const res = sumOfTwoNumbers(arr, 10);
    expect(res).toEqual([0, 3]);
  });

  test('intersection', () => {
    const arr1 = [1, 2, 2, 1];
    const arr2 = [2, 2];
    expect(intersection(arr1, arr2)).toEqual([2]);

    const arr3 = [4, 9, 5];
    const arr4 = [9, 4, 9, 8, 4];
    expect(intersection(arr3, arr4)).toEqual([9, 4]);
  });
});
