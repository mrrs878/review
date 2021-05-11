/*
 * @Author: your name
 * @Date: 2021-05-11 19:01:35
 * @LastEditTime: 2021-05-11 19:03:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /review/src/js/extend_combination.js
 */
function SuperType(friends) {
  this.friends = friends;
}
SuperType.prototype.getFriends = function () {
  return this.friends;
};

function SubType(name, friends) {
  SuperType.call(this, friends);
}
SubType.prototype = new SuperType();
SubType.prototype.getName = function () {
  return this.name;
};

export { SuperType, SubType };
