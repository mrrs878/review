/*
 * @Author: mrrs878@foxmail.com
 * @Date: 2021-05-12 22:02:45
 * @LastEditTime: 2021-05-12 22:48:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \review\src\js\iterator.test.js
 */
import iterable from './iterator';

test('iterator protocol', () => {
  const arr = ['tom', 'jerry'];

  const iter1 = arr[Symbol.iterator]();
  expect(iter1.next().value).toBe('tom');
  expect(iter1.next().value).toBe('jerry');
  expect(iter1.next().done).toBeTruthy();

  const iter2 = arr[Symbol.iterator]();
  expect(iter2.next().done).toBeFalsy();

  const iter3 = arr[Symbol.iterator]();
  expect(iter3.next().value).toBe('tom');
  arr.splice(1, 0, 'jack');
  expect(iter3.next().value).toBe('jack');
  arr[2] = 'tiny jerry';
  expect(iter3.next().value).toBe('tiny jerry');
});

test('custom iterable', () => {
  const iter = iterable[Symbol.iterator]();

  expect(iter.next().value).toBe(1);
  expect(iter.next().value).toBe(2);
  expect(iter.next().done).toBeTruthy();
});

test('exiting early', () => {
  console.log = jest.fn();
  const [a, b] = iterable;
  expect(a).toBe(1);
  expect(b).toBe(2);
  expect(console.log).toHaveBeenCalledWith('exiting early');
});
