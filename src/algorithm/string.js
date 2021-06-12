/*
 * @Date: 2021-06-12 18:05:01
 * @Author: mrrs878@foxmail.com
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2021-06-12 18:17:39
 * @FilePath: \review\src\algorithm\string.js
 */
function hammingWeight(n) {
  const res = Number(n).toString(2).match(/1/g);
  return res ? res.length : 0;
}

export { hammingWeight };
