/*
 * @Author: mrrs878@foxmail.com
 * @Date: 2021-05-15 22:38:24
 * @LastEditTime: 2021-05-15 22:45:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \review\src\js\function_name.test.js
 */
import {
  fn1, fn2, fn3, fn4, obj,
} from './function_name';

describe('function[name]', () => {
  test('normal function', () => {
    expect(fn1.name).toEqual('fn1');
  });

  test('Function[name]', () => {
    expect(fn2.name).toEqual('anonymous');
  });

  test('(get function)[name]', () => {
    expect(Object.getOwnPropertyDescriptor(obj, 'name').get.name).toEqual('get name');
  });

  test('(arrow function)[name]', () => {
    expect(fn4.name).toEqual('fn4');
  });

  test('(bind function)[name]', () => {
    expect(fn3.name).toEqual('bound fn1');
  });
});
