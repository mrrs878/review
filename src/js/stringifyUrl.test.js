/*
 * @Author: mrrs878@foxmail.com
 * @Date: 2021-07-05 22:45:21
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2021-07-05 23:15:53
 * @FilePath: \review\src\js\stringifyURL.test.js
 */

import { stringifyUrl } from './stringifyUrl';

describe('stringify url', () => {
  test('simple', () => {
    const obj = {
      a: 1, b: null, c: 2, d: true, f: null,
    };
    expect(stringifyUrl(obj)).toEqual('a=1&b=null&c=2&d=true&f=null');
  });

  test('with array', () => {
    const obj = { a: [1, 2], b: null, c: 2 };
    expect(stringifyUrl(obj)).toEqual('a[]=1&a[]=2&b=null&c=2');
  });

  test('with object', () => {
    const obj = { a: { d: 1, f: 2 }, b: [1, 2], c: 2 };
    expect(stringifyUrl(obj)).toEqual('a.d=1&a.f=2&b[]=1&b[]=2&c=2');
  });

  test('with Chinese', () => {
    const obj = { a: { d: '张三', f: 2 }, b: [1, 2], c: 2 };
    expect(stringifyUrl(obj)).toEqual('a.d=张三&a.f=2&b[]=1&b[]=2&c=2');
  });
});
