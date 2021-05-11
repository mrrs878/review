/*
 * @Author: your name
 * @Date: 2021-05-11 18:19:47
 * @LastEditTime: 2021-05-11 19:00:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /review/src/js/extend.test.ts
 */
import { SubType } from './extend_prototype';

test('extend based prototype chain', () => {
  const tom = new SubType('tom');
  tom.friends.push('jack');
  expect(tom.name).toBe('tom');
  expect(tom.friends).toContain('jack');

  const jerry = new SubType('jerry');
  jerry.friends.push('tom');
  expect(jerry.friends).toContain('tom');
  expect(jerry.friends).toContain('jack');

  expect(tom.getFriends).not.toBeUndefined();
});
