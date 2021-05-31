/*
 * @Date: 2021-05-31 16:13:53
 * @Author: mrrs878@foxmail.com
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2021-05-31 19:02:17
 * @FilePath: /review/src/js/promiseAllSettled.test.js
 */
import { promiseAllSettled1, promiseAllSettled2 } from './promiseAllSettled';

describe('Promise.allSettled', () => {
  test('mdn cases', async () => {
    const promise1 = Promise.resolve(3);
    const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'foo'));
    const promise3 = 4;
    const promises = [promise1, promise2, promise3];
    const res2 = await promiseAllSettled1(promises);
    const res3 = await promiseAllSettled2(promises);
    expect(res2).toEqual(res3);
    if (!/^v10/.test(process.version)) {
      const res1 = await Promise.allSettled(promises);
      expect(res1).toEqual(res3);
    }
  });
});
