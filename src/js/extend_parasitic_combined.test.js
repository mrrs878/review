/*
 * @Author: your name
 * @Date: 2021-05-11 19:14:06
 * @LastEditTime: 2021-05-11 19:18:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /review/src/js/extend_parasitic_combined.test.js
 */
import { SubType } from './extend_parasitic_combined';

test('extend based on Parasitic Combined', () => {
  const tom = new SubType('tom', 'jack');
  expect(tom.friends).toContain('jack');

  const jerry = new SubType('jerry', []);
  jerry.friends.push('lei');
  expect(jerry.friends).toContain('lei');
  expect(jerry.friends).not.toContain('jack');

  expect(tom.getFriends).not.toBeUndefined();
  expect(tom.getFriends()).toContain('jack');
});
