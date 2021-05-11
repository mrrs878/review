/*
 * @Author: your name
 * @Date: 2021-05-11 22:33:21
 * @LastEditTime: 2021-05-11 23:06:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \review\src\js\proxy.test.js
 */
import {
  revocableProxy, trapInvariant, emptyProxy, emptyTarget, hiddenProps,
} from './proxy';

test('empty proxy', () => {
  emptyTarget.name = 'tom';
  expect(emptyProxy.name).toBe('tom');

  emptyProxy.age = 23;
  expect(emptyTarget.age).toBe(23);

  expect(() => emptyTarget instanceof Proxy).toThrow(TypeError);
  expect(() => emptyProxy instanceof Proxy).toThrow(TypeError);
});

test('trap invariant', () => {
  expect(() => trapInvariant.name).toThrow(TypeError);
});

test('revocable proxy', () => {
  expect(revocableProxy.proxy.name).toBe('tom');
  revocableProxy.revoke();
  expect(() => revocableProxy.proxy.name).toThrow(TypeError);
  revocableProxy.revoke();
});

test('hidden properties', () => {
  expect(hiddenProps.name).toBe('tom');
  expect(hiddenProps.age).toBeUndefined();
  expect(Reflect.has(hiddenProps, 'age')).toBe(false);
});
