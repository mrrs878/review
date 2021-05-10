/*
 * @Author: your name
 * @Date: 2021-05-10 22:07:31
 * @LastEditTime: 2021-05-10 23:17:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \review\src\js\extend.js
 */

/*
  原型链模式
*/
!(() => {
  function SuperType() {
    this.property = true;
  }
  SuperType.prototype.getSuperValue = function () {
    return this.property;
  }
  
  function SubType() {
    this.subProperty = false;
  }
  SubType.prototype = new SuperType();
  SubType.prototype.getSubValue = function () {
    return this.property;
  }
  
  const instance = new SubType();
  console.log(instance.getSuperValue());
  const instance2 = new SubType();
  console.log(instance2.getSuperValue());
  // true
  // true
})()

/*
  盗用构造函数
*/
!(() => {
  function SuperType(name) {
    this.name = name;
  }
  SuperType.prototype.getSuperValue = function () {
    return this.property;
  }

  function SubType(name, age) {
    SuperType.call(this, name);
    this.age = age;
  }

  const instance = new SubType('tom', 21);
  console.log(instance);
  const instance2 = new SubType('jerry', 22);
  console.log(instance2);
  console.log(instance2.getSuperValue);
  // SubType { name: 'tom', age: 21 }  
  // SubType { name: 'jerry', age: 22 }
})();

/*
  组合式继承
*/
!(() => {
  function SuperType(name) {
    this.name = name;
  }
  SuperType.prototype.getSuperValue = function () {
    return this.name;
  }

  function SubType(name, age) {
    SuperType.call(this, name);
    this.age = age;
  }
  SubType.prototype = new SuperType();
  SubType.prototype.getSubValue = function () {
    return this.age;
  }

  const instance = new SubType('tom', 21);
  const instance2 = new SubType('jerry', 23);
  console.log(instance);
  console.log(instance.getSubValue());
  console.log(instance.getSuperValue());
  console.log(instance2.name);
  // SuperType { name: 'tom', age: 21 }
  // 21
  // tom
  // jerry
})()

/*
  寄生组合式继承
*/
!(() => {
  function inheritance(superType, subType) {
    const pro = Object.create(superType.prototype);
    pro.constructor = subType;
    subType.prototype = pro;
  }
  
  function SuperType(name, friends) {
    this.name = name;
    this.friends = friends;
  }
  SuperType.prototype.getSuperValue = function () {
    return this.name;
  }

  function SubType(name, age, friends, colors) {
    SuperType.call(this, name, friends);
    this.age = age;
    this.colors = colors;
  }
  inheritance(SuperType, SubType);
  SubType.prototype.getSubValue = function () {
    return this.age;
  }

  const instance = new SubType('tom', 21, [], []);
  instance.friends.push('jerry');
  instance.colors.push('pink');
  console.log(instance.getSuperValue());
  console.log(instance.getSubValue());
  console.log(instance.friends);
  console.log(instance.colors);
  
  const instance2 = new SubType('jerry', 21, [], []);
  instance2.friends.push('tom');
  instance2.colors.push('black');
  console.log(instance2.friends);
  console.log(instance2.colors);
  // tom
  // 21
  // [ 'jerry' ]
  // [ 'pink' ]
  // [ 'tom' ]
  // [ 'black' ]
})()