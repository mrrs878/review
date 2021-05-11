/*
 * @Author: your name
 * @Date: 2021-05-11 18:52:30
 * @LastEditTime: 2021-05-11 18:55:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /review/src/js/extend_constructor.js
 */
function SuperType(friends) {
  this.friends = friends;
}
SuperType.prototype.getFriends = function () {
  return this.friends;
};

function SubType(name, friends) {
  this.name = name;
  SuperType.call(this, friends);
}
SubType.prototype.getName = function () {
  return this.name;
};

export { SuperType, SubType };
