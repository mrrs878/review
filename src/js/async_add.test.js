/*
 * @Author: mrrs878@foxmail.com
 * @Date: 2021-05-11 17:02:43
 * @LastEditTime: 2021-05-31 11:28:27
 * @LastEditors: mrrs878@foxmail.com
 * @Description: In User Settings Edit
 * @FilePath: /review/src/js/async_add.test.js
 */
import { sum, sumTmp, performanceSum } from './async_add';

describe('async add', () => {
  test('adds 1 + 2 to equal 3', async () => {
    const res = await sum(1, 2);
    const res2 = await sumTmp(1, 2);
    expect(res).toBe(res2);
  }, 10000);

  test.skip('performance', async () => {
    const res = await performanceSum(1, 2, 3, 4, 5);
    expect(res).toEqual(15);
  });
});
