/*
 * @Author: mrrs878@foxmail.com
 * @Date: 2021-05-11 19:04:08
 * @LastEditTime: 2021-05-11 19:07:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /review/src/js/extend_combination.test.js
 */
import { SubType } from './extend_combination';

test('extend based on combination', () => {
  const tom = new SubType('tom', ['jack']);
  expect(tom.friends).toContain('jack');

  const jerry = new SubType('jerry', []);
  jerry.friends.push('lei');
  expect(jerry.friends).toContain('lei');
  expect(jerry.friends).not.toContain('jack');

  expect(tom.getFriends).not.toBeUndefined();
  expect(tom.getFriends()).toContain('jack');
});
