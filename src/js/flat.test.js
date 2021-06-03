/*
 * @Date: 2021-06-03 22:08:31
 * @Author: mrrs878@foxmail.com
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2021-06-03 22:22:59
 * @FilePath: \review\src\js\flat.test.js
 */
import flat from './flat';

describe('Array.flat', () => {
  test('default', () => {
    const target = [1, [2, 3], 4];
    expect(flat(target)).toEqual(target.flat());
  });

  test('depth @ 2', () => {
    const target = [1, [2, 3], 4, [5, [6, 7]]];
    expect(flat(target, 2)).toEqual(target.flat(2));
  });

  test('depth @ 1', () => {
    const target = [1, [2, 3], 4, [5, [6, 7]]];
    expect(flat(target)).toEqual(target.flat());
  });
});
