/*
 * @Date: 2021-06-01 15:17:39
 * @Author: mrrs878@foxmail.com
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2021-06-01 15:45:04
 * @FilePath: /review/src/js/shallowEqual.js
 */
function shallowEqual(obj1, obj2) {
  if (obj1 === obj2) return true;
  if (
    typeof obj1 !== 'object'
    || obj1 === null
    || typeof obj2 !== 'object'
    || obj2 === null
  ) return false;

  if (Reflect.ownKeys(obj1).length !== Reflect.ownKeys(obj2).length) return false;
  const keys = Reflect.ownKeys(obj1);
  for (let i = 0; i < keys.length; i += 1) {
    if (obj1[keys[i]] !== obj2[keys[i]]) return false;
  }
  return true;
}

export default shallowEqual;
