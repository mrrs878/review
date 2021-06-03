/*
 * @Date: 2021-06-03 22:01:26
 * @Author: mrrs878@foxmail.com
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2021-06-03 22:21:51
 * @FilePath: \review\src\js\flat.js
 */
function flat(array, depth = 1) {
  if (!Array.isArray(array)) throw new TypeError('paramter must be an Array');
  if (depth === 1) return [].concat(...array);
  const res = [];
  let dep = 0;
  function perform(src) {
    if (dep > depth) return;
    if (Array.isArray(src)) {
      src.forEach((item) => perform(item));
      dep += 1;
    } else res.push(src);
  }

  perform(array);

  return res;
}

export default flat;
