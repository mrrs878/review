/*
 * @Author: your name
 * @Date: 2021-05-15 10:35:31
 * @LastEditTime: 2021-05-15 11:50:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \review\src\js\debounce.test.js
 */
import { debounce, throttle } from './debounce';

describe('denounce、throttle', () => {
  beforeEach(() => {
    console.log = jest.fn();
  });

  const printTime = jest.fn((time, name) => console.log(time, name));
  const printTimeDebounced = debounce(printTime, 1000);
  const printTimeThrottle = throttle(printTime, 1000);

  function asyncFn(times, timeout, cb) {
    let totalTimes = 0;
    return new Promise((resolve) => {
      const tid = setInterval(() => {
        if (totalTimes === times) {
          clearInterval(tid);
          totalTimes = 0;
          resolve();
          return;
        }
        totalTimes += 1;
        cb(totalTimes, 'tom');
      }, timeout);
    });
  }

  test('debounce', async () => {
    await asyncFn(3, 100, printTimeDebounced);
    await asyncFn(5, 1200, printTimeDebounced);
    expect(printTime.mock.calls.length).toBeLessThan(8);
    return Promise.resolve();
  }, 10000);

  test('debounce with canceled', async () => {
    setTimeout(() => {
      printTimeDebounced.cancel();
    }, 3000);
    await asyncFn(10, 600, printTimeDebounced);
    expect(printTime.mock.calls.length).toBeLessThan(10);
    return Promise.resolve();
  }, 10000);

  test('throttle', async () => {
    await asyncFn(5, 800, printTimeThrottle);
    expect(printTime.mock.calls.length).toBeLessThan(5);
  }, 10000);
});
