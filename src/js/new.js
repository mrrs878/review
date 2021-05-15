/*
 * @Author: your name
 * @Date: 2021-05-15 23:04:43
 * @LastEditTime: 2021-05-15 23:15:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \review\src\js\new.js
 */
function myNew(...args) {
  const [Obj, ...params] = args;
  const obj = {};
  Reflect.setPrototypeOf(obj, Obj.prototype);
  const res = Obj.apply(obj, params);
  return typeof res === 'object' ? res : obj;
}

export default myNew;
