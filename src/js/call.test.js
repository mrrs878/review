/*
 * @Author: your name
 * @Date: 2021-05-14 12:41:39
 * @LastEditTime: 2021-05-14 13:29:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /review/src/js/call.test.js
 */
import { myApply, myCall } from './call';

describe('call,apply,bind', () => {
  const tom = {
    name: 'tom',
    sayHi(tag1 = 'hello', tag2) {
      console.log(`${tag1}, my name is ${this.name}, ${tag2}`);
    },
  };

  beforeEach(() => {
    console.log = jest.fn();
  });

  test('call', () => {
    tom.sayHi.myCall = myCall;

    tom.sayHi();
    expect(console.log).toHaveBeenCalledWith('hello, my name is tom, undefined');
    tom.sayHi.myCall();
    expect(console.log).toHaveBeenCalledWith('hello, my name is , undefined');
    tom.sayHi.myCall({ name: 'jerry' });
    expect(console.log).toHaveBeenCalledWith('hello, my name is jerry, undefined');
    tom.sayHi.myCall({ name: 'jerry' }, 'cock', 'cock');
    expect(console.log).toHaveBeenCalledWith('cock, my name is jerry, cock');
  });

  test('apply', () => {
    tom.sayHi.myApply = myApply;

    tom.sayHi();
    expect(console.log).toHaveBeenCalledWith('hello, my name is tom, undefined');
    tom.sayHi.myApply();
    expect(console.log).toHaveBeenCalledWith('hello, my name is , undefined');
    tom.sayHi.myApply({ name: 'jerry' });
    expect(console.log).toHaveBeenCalledWith('hello, my name is jerry, undefined');
    tom.sayHi.myApply({ name: 'jerry' }, ['cock', 'cock']);
    expect(console.log).toHaveBeenCalledWith('cock, my name is jerry, cock');
  });
});
