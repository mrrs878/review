/*
 * @Author: mrrs878@foxmail.com
 * @Date: 2021-05-13 14:26:09
 * @LastEditTime: 2021-05-13 14:29:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /review/src/js/myInstanceof.test.js
 */
import myInstanceof from './instanceof';

test('instanceof class', () => {
  class User {}

  const tom = new User();

  expect(myInstanceof(tom, User)).toBeTruthy();
});

test('instanceof Built-in objects', () => {
  const arr = [];
  const object = {};

  expect(myInstanceof(arr, Array)).toBeTruthy();
  expect(myInstanceof(object, Object)).toBeTruthy();
});
