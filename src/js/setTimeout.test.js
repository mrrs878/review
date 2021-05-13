/*
 * @Author: your name
 * @Date: 2021-05-13 10:27:45
 * @LastEditTime: 2021-05-13 10:31:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /review/src/js/setTimeout.test.js
 */
import { mySetInterval, mySetTimeout } from './setTimeout';

test('setTimeout', async () => {
  let count = 0;
  function fn() {
    return new Promise((resolve) => {
      mySetTimeout(() => {
        count += 1;
        resolve();
      }, 2000);
    });
  }

  await fn();
  expect(count).toBe(1);
});

test('setInterval', async () => {
  let count = 0;

  function fn() {
    return new Promise((resolve) => {
      mySetInterval((timer) => {
        count += 1;
        if (count === 3) {
          window.cancelAnimationFrame(timer);
          resolve();
        }
      }, 1000);
    });
  }

  await fn();
  expect(count).toBe(3);
});
