/*
 * @Author: your name
 * @Date: 2021-05-11 18:56:10
 * @LastEditTime: 2021-05-11 18:59:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /review/src/js/extend_constructor.test.js
 */
import { SubType } from './extend_constructor';

test('extend based on constructor', () => {
  const tom = new SubType('tom', ['jack']);
  expect(tom.friends).toContain('jack');

  const jerry = new SubType('tom', []);
  jerry.friends.push('lei');
  expect(jerry.friends).toContain('lei');
  expect(jerry.friends).not.toContain('jack');

  expect(tom.getFriends).toBeUndefined();
});
