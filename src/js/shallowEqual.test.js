/*
 * @Date: 2021-06-01 15:22:16
 * @Author: mrrs878@foxmail.com
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2021-06-01 15:45:53
 * @FilePath: /review/src/js/shallowEqual.test.js
 */
import shallowEqual from './shallowEqual';

describe('shallowEqual', () => {
  test('returns false if either argument is null', () => {
    expect(shallowEqual(null, {})).toEqual(false);
    expect(shallowEqual({}, null)).toEqual(false);
  });

  test('returns true if both arguments are null or undefined', () => {
    expect(shallowEqual(null, null)).toEqual(true);
    expect(shallowEqual(undefined, undefined)).toEqual(true);
  });

  test('returns true if arguments are shallow equal', () => {
    expect(shallowEqual({ a: 1, b: 2, c: 3 }, { a: 1, b: 2, c: 3 })).toEqual(
      true,
    );
  });

  test('returns false if arguments are not objects and not equal', () => {
    expect(shallowEqual(1, 2)).toEqual(false);
  });

  test('returns false if only one argument is not an object', () => {
    expect(shallowEqual(1, {})).toEqual(false);
  });

  test('returns false if first argument has too many keys', () => {
    expect(shallowEqual({ a: 1, b: 2, c: 3 }, { a: 1, b: 2 })).toEqual(false);
  });

  test('returns false if second argument has too many keys', () => {
    expect(shallowEqual({ a: 1, b: 2 }, { a: 1, b: 2, c: 3 })).toEqual(false);
  });

  test('returns true if values are not primitives but are ===', () => {
    const obj = {};
    expect(
      shallowEqual({ a: 1, b: 2, c: obj }, { a: 1, b: 2, c: obj }),
    ).toEqual(true);
  });

  // subsequent test cases are copied from lodash tests
  test('returns false if arguments are not shallow equal', () => {
    expect(shallowEqual({ a: 1, b: 2, c: {} }, { a: 1, b: 2, c: {} })).toEqual(
      false,
    );
  });

  test('should treat objects created by `Object.create(null)` like any other plain object', () => {
    function Foo() {
      this.a = 1;
    }
    Foo.prototype.constructor = null;

    const object2 = { a: 1 };
    expect(shallowEqual(new Foo(), object2)).toEqual(true);

    const object1 = Object.create(null);
    object1.a = 1;
    expect(shallowEqual(object1, object2)).toEqual(true);
  });
});
