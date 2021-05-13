/*
 * @Author: your name
 * @Date: 2021-05-13 11:05:24
 * @LastEditTime: 2021-05-13 13:19:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /review/src/js/promise.test.js
 */
import MyPromise from './promise';

test('promise @ then.then', () => {
  function fn() {
    return new MyPromise((resolve) => {
      setTimeout(() => resolve(1), 1000);
    });
  }

  fn().then((res) => {
    expect(res).toBe(1);
    return 2;
  }).then((res) => {
    expect(res).toBe(2);
  });
});

test('promise @ async/await', async () => {
  function fn() {
    return new MyPromise((resolve) => {
      setTimeout(() => resolve(1), 1000);
    });
  }

  const res = await fn();
  expect(res).toBe(1);
});

test('promise @ reject', async () => {
  function fn() {
    return new MyPromise((resolve, reject) => {
      setTimeout(() => reject(1), 1000);
    });
  }

  expect.assertions(1);
  await expect(fn()).rejects.toEqual(1);

  expect.assertions(1);
  fn().catch((e) => {
    expect(e).toEqual(1);
  });
});
