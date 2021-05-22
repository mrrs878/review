/*
* @Author: mrrs878@foxmail.com
* @Date: 2021-05-22 10:31:17
 * @LastEditTime: 2021-05-22 11:19:31
 * @LastEditors: Please set LastEditors
* @Description: In User Settings Edit
* @FilePath: \review\src\js\stringify.test.js
*/
/* eslint-disable no-useless-escape */
describe('JSON.stringify', () => {
  test('toJSON', () => {
    const tom = {
      name: 'tom',
      toJSON: () => 'i am tom',
    };

    expect(JSON.stringify(tom)).toEqual('"\i am tom\"');
  });

  test('Date', () => {
    const time = new Date('2020-2-20');
    expect(JSON.stringify(time)).toEqual(`\"${time.toISOString()}\"`);
  });

  test('undefined/function/symbol in object', () => {
    const tom = {
      age: undefined,
      address: Symbol('xxx'),
      work() {},
    };
    expect(JSON.stringify(tom)).toEqual('{}');
  });

  test('undefined/function/symbol in array', () => {
    const tom = [undefined, Symbol('xxx'), () => {}];
    expect(JSON.stringify(tom)).toEqual('[null,null,null]');
  });

  test('cyclic object', () => {
    try {
      const tom = {};
      const jerry = {};

      tom.friend = jerry;
      jerry.friend = tom;
      JSON.stringify(tom);
    } catch (e) {
      expect(e).toBeInstanceOf(TypeError);
    }
  });

  test('undefined function', () => {
    expect(JSON.stringify(() => {})).toEqual(undefined);
    expect(JSON.stringify(undefined)).toEqual(undefined);
  });

  test('enumerable property', () => {
    const tom = {
      name: 'tom',
    };
    Reflect.defineProperty(tom, 'age', { value: 23, enumerable: false });

    expect(JSON.stringify(tom)).toEqual('{\"name\":\"tom\"}');
  });

  test('Boolean Number String', () => {
    const tom = {
      name: String('tom'),
      age: Number(23),
    };
    expect(JSON.stringify(tom)).toEqual('{\"name\":\"tom\",\"age\":23}');
  });

  test('replacer is a function', () => {
    const tom = {
      name: 'tom',
      age: 23,
      married: false,
      address: 'xxx',
      friends: ['jerry'],
    };

    expect(JSON.stringify(tom, (key, value) => {
      if (key === 'name') return String('i am tom');
      if (key === 'address') return undefined;
      return value;
    })).toEqual('{\"name\":\"i am tom\",\"age\":23,\"married\":false,\"friends\":[\"jerry\"]}');
  });

  test('replacer is a function', () => {
    const tom = {
      name: 'tom',
      age: 23,
      married: false,
      address: 'xxx',
      friends: ['jerry'],
    };
    expect(JSON.stringify(
      tom,
      ['name', 'age', 'married', 'friends'],
    )).toEqual('{\"name\":\"tom\",\"age\":23,\"married\":false,\"friends\":[\"jerry\"]}');
  });
});
