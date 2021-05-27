/*
 * @Date: 2021-05-27 13:54:28
 * @Author: mrrs878@foxmail.com
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2021-05-27 14:48:09
 * @FilePath: /review/src/js/reduce.js
 */
function myMap(src, cb) {
  if (!Array.isArray(src)) throw new TypeError('src must be an array');
  const tmp = [];
  src.forEach((item) => tmp.push(cb(item)));
  return tmp;
}

function myReduce(src, cb, initialValue) {
  if (!Array.isArray(src)) throw new TypeError('src must be an array');
  let init = initialValue || src[0];
  const tmp = initialValue ? src : src.slice(1);
  tmp.forEach((item, index) => {
    init = cb(init, item, index, tmp);
  });
  return init;
}

export { myMap, myReduce };
