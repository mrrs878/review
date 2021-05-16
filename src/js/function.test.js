/*
 * @Author: mrrs878@foxmail.com
 * @Date: 2021-05-15 22:38:24
 * @LastEditTime: 2021-05-16 10:18:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \review\src\js\function.test.js
 */
import {
  fn1, fn2, fn3, fn4, obj,
} from './function';

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

  test('Function.new.target', () => {
    const errorMessage = 'User muse be instantiated using "new"';
    const successMessage = 'User instantiated using "new"';

    console.log = jest.fn();

    function User() {
      if (!new.target) {
        throw new Error(errorMessage);
      }
      console.log(successMessage);
    }

    try {
      User();
    } catch (e) {
      expect(e.message).toEqual(errorMessage);
    }

    // eslint-disable-next-line no-unused-vars
    const user = new User();
    expect(console.log).toBeCalledWith(successMessage);
  });
});
