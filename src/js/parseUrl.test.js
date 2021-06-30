/*
 * @Date: 2021-06-30 17:38:33
 * @Author: mrrs878@foxmail.com
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2021-06-30 23:39:29
 * @FilePath: \review\src\js\parseUrl.test.js
 */
import { parseUrl } from './parseUrl';

describe('parse url', () => {
  test('simple', () => {
    const url = 'https://xxx.com?name=tom&age=21';
    expect(parseUrl(url)).toEqual({ name: 'tom', age: 21 });
  });

  test('empty', () => {
    expect(parseUrl('https://xxx.com')).toEqual({});
  });

  test('array', () => {
    const url = 'https://xxx.com?a[]=1&a[]=2';
    expect(parseUrl(url)).toEqual({ a: [1, 2] });
  });

  test('object', () => {
    const url = 'https://xxx.com?a[b]=1&a.c=2';
    expect(parseUrl(url)).toEqual({ a: { b: 1, c: 2 } });
  });

  test('complex', () => {
    const url = 'https://xxx.com?a[b]=1&a.c=2&a.e.d=3&c=1&c[]=2&d#name';
    expect(parseUrl(url)).toEqual({ a: { b: 1, c: 2, e: { d: 3 } }, c: [1, 2], d: '' });
  });
});
