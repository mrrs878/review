/*
 * @Date: 2021-05-31 15:11:33
 * @Author: mrrs878@foxmail.com
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2021-05-31 15:34:55
 * @FilePath: /review/src/js/promiseAny.test.js
 */
import promiseAny from './promiseAny';

describe('promiseAny', () => {
  test('with resolved', async () => {
    const promise1 = Promise.resolve(1);
    const promise2 = Promise.resolve(2);
    const promise3 = Promise.resolve(3);
    const promise4 = Promise.reject(new Error(4));
    const res = await promiseAny([promise1, promise2, promise3, promise4]);
    expect(res).toEqual(1);
    const res2 = await promiseAny([promise2, promise1, promise3, promise4]);
    expect(res2).toEqual(2);
  });

  test('all rejected', async () => {
    const errors = [new Error(1), new Error(2), new Error(3), new Error(4)];
    try {
      const promise1 = Promise.reject(errors[0]);
      const promise2 = Promise.reject(errors[1]);
      const promise3 = Promise.reject(errors[2]);
      const promise4 = Promise.reject(errors[3]);
      await promiseAny([promise1, promise2, promise3, promise4]);
    } catch (e) {
      expect(e).toEqual(errors);
    }
  });
});
