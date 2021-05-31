/*
 * @Author: mrrs878@foxmail.com
 * @Date: 2021-05-11 19:04:08
 * @LastEditTime: 2021-05-31 15:59:48
 * @LastEditors: mrrs878@foxmail.com
 * @Description: In User Settings Edit
 * @FilePath: /review/src/js/extend.test.js
 */
import {
  CombinationSubType,
  ConstructorSubType,
  ParasiticCombinedSubType,
  PrototypeSubType,
} from './extend';

describe('extend', () => {
  test('combination', () => {
    const tom = new CombinationSubType('tom', ['jack']);
    expect(tom.friends).toContain('jack');

    const jerry = new CombinationSubType('jerry', []);
    jerry.friends.push('lei');
    expect(jerry.friends).toContain('lei');
    expect(jerry.friends).not.toContain('jack');

    expect(tom.getFriends).not.toBeUndefined();
    expect(tom.getFriends()).toContain('jack');
  });

  test('constructor', () => {
    const tom = new ConstructorSubType('tom', ['jack']);
    expect(tom.friends).toContain('jack');

    const jerry = new ConstructorSubType('tom', []);
    jerry.friends.push('lei');
    expect(jerry.friends).toContain('lei');
    expect(jerry.friends).not.toContain('jack');

    expect(tom.getFriends).toBeUndefined();
  });

  test('Parasitic Combined', () => {
    const tom = new ParasiticCombinedSubType('tom', 'jack');
    expect(tom.friends).toContain('jack');

    const jerry = new ParasiticCombinedSubType('jerry', []);
    jerry.friends.push('lei');
    expect(jerry.friends).toContain('lei');
    expect(jerry.friends).not.toContain('jack');

    expect(tom.getFriends).not.toBeUndefined();
    expect(tom.getFriends()).toContain('jack');
  });

  test('prototype chain', () => {
    const tom = new PrototypeSubType('tom');
    tom.friends.push('jack');
    expect(tom.name).toBe('tom');
    expect(tom.friends).toContain('jack');

    const jerry = new PrototypeSubType('jerry');
    jerry.friends.push('tom');
    expect(jerry.friends).toContain('tom');
    expect(jerry.friends).toContain('jack');

    expect(tom.getFriends).not.toBeUndefined();
  });
});
