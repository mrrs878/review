/*
 * @Date: 2021-05-31 15:43:21
 * @Author: mrrs878@foxmail.com
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2021-05-31 15:45:33
 * @FilePath: /review/src/js/promiseAll.test.js
 */
import promiseAll from './promiseAll';

describe('promiseAll', () => {
  test('mdn case', async () => {
    const promise1 = Promise.resolve(3);
    const promise2 = 42;
    const promise3 = new Promise((resolve) => {
      setTimeout(resolve, 100, 'foo');
    });
    const res1 = await Promise.all([promise1, promise2, promise3]);
    const res2 = await promiseAll([promise1, promise2, promise3]);
    expect(res1).toEqual(res2);
  });
});
