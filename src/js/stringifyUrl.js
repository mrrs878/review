/*
 * @Author: mrrs878@foxmail.com
 * @Date: 2021-07-05 22:36:59
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2021-07-05 23:15:14
 * @FilePath: \review\src\js\stringifyURL.js
 */

/**
 * @description: 判断所给变量是不是Object类型
 * @param {any} target
 * @return {*}
 */
function isObject(target) {
  return Object.prototype.toString.call(target) === '[object Object]';
}

/**
 * @description: 判断所给变量是不是Array类型
 * @param {any} target
 * @return {*}
 */
function isArray(target) {
  return Array.isArray(target);
}

/**
 * @description: 对数组编码
 * @param {string} key
 * @param {Array<any>} arr
 * @return {string}
 */
function stringifyArray(key, arr) {
  return arr.reduce((pre, cur) => `${pre}&${encodeURIComponent(key)}[]=${encodeURIComponent(cur)}`, '').slice(1);
}

/**
 * @description: 对对象编码
 * @param {string} key
 * @param {object} obj
 * @return {string}
 */
function stringifyObject(key, obj) {
  const keys = Reflect.ownKeys(obj);
  return keys.reduce((pre, cur) => {
    let tmp = `${key}.${cur}=${obj[cur]}`;
    const safeCur = encodeURIComponent(cur);
    if (!obj[cur]) tmp = `${safeCur}=`;
    if (isArray(obj[cur])) tmp = stringifyArray(`${key}.${safeCur}`, obj[cur]);
    if (isObject(obj[cur])) tmp = stringifyObject(`${key}.${safeCur}`, obj[cur]);
    return `${pre}&${tmp}`;
  }, '').slice(1);
}

/**
 * @description: 编码URL
 * @param {object} obj
 * @return {string}
 */
function stringifyUrl(obj) {
  const keys = Reflect.ownKeys(obj);
  return keys.reduce((pre, cur) => {
    const key = encodeURIComponent(cur);
    let tmp = `${key}=${encodeURIComponent(obj[cur])}`;
    if (isArray(obj[cur])) tmp = stringifyArray(key, obj[cur]);
    else if (isObject(obj[cur])) tmp = stringifyObject(key, obj[cur]);
    return `${pre}&${tmp}`;
  }, '').slice(1);
}

export { stringifyUrl };
