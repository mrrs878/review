/*
 * @Author: mrrs878@foxmail.com
 * @Date: 2021-05-11 17:02:43
 * @LastEditTime: 2021-05-11 18:04:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /review/src/js/async_add.test.js
 */
import sum from './async_add';

test('adds 1 + 2 to equal 3', async () => {
  const res = await sum(1, 2);
  expect(res).toBe(3);
});

test('adds 1 + 2 + 3 to equal 6', async () => {
  const res = await sum(1, 2, 3);
  expect(res).toBe(6);
});
