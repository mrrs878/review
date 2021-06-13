/*
 * @Date: 2021-06-13 17:08:07
 * @Author: mrrs878@foxmail.com
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2021-06-13 18:01:26
 * @FilePath: \review\src\algorithm\search.test.js
 */
import { binarySearch } from './search';

describe('search problems', () => {
  test('binarySearch', () => {
    expect(binarySearch([1, 2, 3, 4, 5, 6], 3)).toEqual(2);
    expect(binarySearch([1, 2, 3, 4, 5, 6], 7)).toEqual(-1);
    expect(binarySearch([1, 2, 3, 4, 5, 6], 2)).toEqual(1);
  });
});
