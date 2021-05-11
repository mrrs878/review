/*
* @Author: your name
* @Date: 2021-05-11 17:14:33
 * @LastEditTime: 2021-05-11 19:19:30
 * @LastEditors: Please set LastEditors
* @Description: In User Settings Edit
* @FilePath: /review/src/js/extends.js
*/
function SuperType() {
  this.name = 'tom';
  this.friends = ['jerry'];
}
SuperType.prototype.getFriends = function () {
  return this.friends;
};

function SubType(name) {
  this.name = name;
}
SubType.prototype = new SuperType();
SubType.prototype.getName = function () {
  return this.name;
};

export { SuperType, SubType };
