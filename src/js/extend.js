/*
 * @Author: mrrs878@foxmail.com
 * @Date: 2021-05-11 19:01:35
 * @LastEditTime: 2021-06-15 14:38:17
 * @LastEditors: mrrs878@foxmail.com
 * @Description: In User Settings Edit
 * @FilePath: /review/src/js/extend.js
 */

/**
 * extend based on combination
*/
function CombinationSuperType(friends) {
  this.friends = friends;
}
CombinationSuperType.prototype.getFriends = function () {
  return this.friends;
};
function CombinationSubType(name, friends) {
  this.name = name;
  CombinationSuperType.call(this, friends);
}
CombinationSubType.prototype = new CombinationSuperType();
CombinationSubType.prototype.getName = function () {
  return this.name;
};

/**
 * extend based on constructor
*/
function ConstructorSuperType(friends) {
  this.friends = friends;
}
ConstructorSuperType.prototype.getFriends = function () {
  return this.friends;
};
function ConstructorSubType(name, friends) {
  this.name = name;
  ConstructorSuperType.call(this, friends);
}
ConstructorSubType.prototype.getName = function () {
  return this.name;
};

/**
 * extend based on Parasitic Combined
*/
function inheritance(superType, subType) {
  const pro = Object.create(superType.prototype);
  pro.constructor = subType;
  // eslint-disable-next-line no-param-reassign
  subType.prototype = pro;
}

function ParasiticCombinedSuperType(friends) {
  this.friends = friends;
}
ParasiticCombinedSuperType.prototype.getFriends = function () {
  return this.friends;
};
function ParasiticCombinedSubType(name, friends) {
  this.na = name;
  ParasiticCombinedSuperType.call(this, friends);
}
inheritance(ParasiticCombinedSuperType, ParasiticCombinedSubType);
ParasiticCombinedSubType.prototype.getName = function () {
  return this.name;
};

/**
 * extend based on Prototype Chain
*/
function PrototypeSuperType() {
  this.name = 'tom';
  this.friends = ['jerry'];
}
PrototypeSuperType.prototype.getFriends = function () {
  return this.friends;
};
function PrototypeSubType(name) {
  this.name = name;
}
PrototypeSubType.prototype = new PrototypeSuperType();
PrototypeSubType.prototype.getName = function () {
  return this.name;
};

export {
  CombinationSuperType, CombinationSubType,
  ConstructorSuperType, ConstructorSubType,
  ParasiticCombinedSuperType, ParasiticCombinedSubType,
  PrototypeSuperType, PrototypeSubType,
};
