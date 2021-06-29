/*
 * @Date: 2021-06-28 22:45:04
 * @Author: mrrs878@foxmail.com
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2021-06-28 23:02:38
 * @FilePath: \review\src\js\asyncScheduler.test.js
 */
import Scheduler from './asyncScheduler';

describe('async scheduler', () => {
  beforeEach(() => {
    console.log = jest.fn();
  });
  test('scheduler', async () => {
    const asyncFun1 = () => new Promise((resolve) => setTimeout(resolve, 200, 1));
    const asyncFun2 = () => new Promise((resolve) => setTimeout(resolve, 200, 2));
    const asyncFun3 = () => new Promise((resolve) => setTimeout(resolve, 200, 3));
    const asyncFun4 = () => new Promise((resolve) => setTimeout(resolve, 200, 4));
    const asyncFun5 = () => new Promise((resolve, reject) => setTimeout(reject, 100, 5));

    const asyncFuncs = [asyncFun1, asyncFun2, asyncFun3, asyncFun4];

    const scheduler = new Scheduler(2);

    await scheduler.add(asyncFuncs.map((item) => item()));
    await scheduler.add(asyncFun5());

    expect(console.log).toBeCalledTimes(3);
  });
});
