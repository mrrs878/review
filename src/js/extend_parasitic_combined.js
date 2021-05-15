/*
 * @Author: mrrs878@foxmail.com
 * @Date: 2021-05-11 19:10:27
 * @LastEditTime: 2021-05-11 19:19:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /review/src/js/extend_par.js
 */
function inheritance(superType, subType) {
  const pro = Object.create(superType.prototype);
  pro.constructor = subType;
  // eslint-disable-next-line no-param-reassign
  subType.prototype = pro;
}

function SuperType(friends) {
  this.friends = friends;
}
SuperType.prototype.getFriends = function () {
  return this.friends;
};

function SubType(name, friends) {
  this.na = name;
  SuperType.call(this, friends);
}
inheritance(SuperType, SubType);
SubType.prototype.getName = function () {
  return this.name;
};

export { SuperType, SubType };
