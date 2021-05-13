/*
 * @Author: your name
 * @Date: 2021-05-13 14:22:27
 * @LastEditTime: 2021-05-13 14:27:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /review/src/js/instanceof.js
 */
function myInstanceof(instance, object) {
  const proto = Reflect.getPrototypeOf(instance);
  if (proto === null) return false;
  if (object.prototype === proto) return true;
  return myInstanceof(proto, object);
}

export default myInstanceof;
