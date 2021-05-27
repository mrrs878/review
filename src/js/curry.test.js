/*
 * @Author: your name
 * @Date: 2021-05-27 16:57:03
 * @LastEditTime: 2021-05-27 16:59:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /review/src/js/curry.test.js
 */
import myCurry from './curry';

describe('curry', () => {
  const add = (a, b, c, d) => a + b + c + d;
  test('full args', () => {
    const curryAdd = myCurry(add);
    expect(curryAdd(1, 2, 3, 4)).toEqual(10);
  });

  test('some args', () => {
    const curryAdd = myCurry(add);
    const addTwo = (a, b) => curryAdd(a, b);
    expect(addTwo(1, 2)(3, 4)).toEqual(10);
  });
});
