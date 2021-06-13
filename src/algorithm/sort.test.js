/*
 * @Date: 2021-06-13 17:58:21
 * @Author: mrrs878@foxmail.com
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2021-06-13 21:44:40
 * @FilePath: \review\src\algorithm\sort.test.js
 */
import { bubbleSort, quickSort } from './sort';

describe('sort problems', () => {
  test('bubble', () => {
    const tmp = [1, 4, 2, 8, 5, 6];
    const res = bubbleSort([1, 4, 2, 8, 5, 6]);
    tmp.sort();
    expect(res).toEqual(tmp);
  });

  test('quickSort case1', () => {
    const tmp1 = [1, 4, 2, 8, 5, 6];
    const tmp2 = [1, 4, 2, 8, 5, 6];
    quickSort(tmp1);
    tmp2.sort();
    expect(tmp1).toEqual(tmp2);
  });

  test('quickSort case2', () => {
    const tmp1 = [];
    quickSort(tmp1);
    expect(tmp1).toEqual([]);
  });

  test('quickSort case3', () => {
    const tmp1 = [1, 1, 1, 1, 1, 1, 1];
    quickSort(tmp1);
    expect(tmp1).toEqual(tmp1);
  });
});
