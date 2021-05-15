/*
 * @Author: your name
 * @Date: 2021-05-15 23:08:08
 * @LastEditTime: 2021-05-15 23:24:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \review\src\js\new.test.js
 */
import myNew from './new';

describe('new', () => {
  test('common', () => {
    // ES6 classes should be called only with new.
    function User(name, age, friends) {
      this.name = name;
      this.age = age;
      this.friends = friends;
    }
    User.prototype.sayHi = function (tag) {
      const { name, age, friends } = this;
      return `${tag}, i am ${name}, ${age} years old, i have many friends, they are ${friends.toString()}`;
    };

    const tom = myNew(User, 'tom', 23, ['jerry', 'jack']);
    const jerry = myNew(User, 'jerry', 24, ['tom', 'jack']);
    expect(tom.sayHi('cock')).toEqual('cock, i am tom, 23 years old, i have many friends, they are jerry,jack');
    expect(tom.sayHi.call(jerry, 'yeah')).toEqual('yeah, i am jerry, 24 years old, i have many friends, they are tom,jack');
  });
});
