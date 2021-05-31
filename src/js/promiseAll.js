/*
 * @Date: 2021-05-31 15:36:02
 * @Author: mrrs878@foxmail.com
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2021-05-31 15:47:00
 * @FilePath: /review/src/js/promiseAll.js
 */
function promiseAll(promises) {
  if (!promises[Symbol.iterator]) throw new TypeError('promises must be iterable');
  return new Promise((resolve, reject) => {
    const resolvedPromises = [];
    promises.forEach((promise) => Promise.resolve(promise).then((res) => {
      resolvedPromises.push(res);
      if (resolvedPromises.length === promises.length) resolve(resolvedPromises);
    }, reject));
  });
}

export default promiseAll;
