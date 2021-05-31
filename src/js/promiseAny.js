/*
 * @Date: 2021-05-31 15:05:59
 * @Author: mrrs878@foxmail.com
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2021-05-31 15:47:46
 * @FilePath: /review/src/js/promiseAny.js
 */
function promiseAny(promises) {
  if (!promises[Symbol.iterator]) throw new TypeError('promises must be iterable');
  return new Promise((resolve, reject) => {
    const { length } = promises;
    const rejectedPromises = [];
    promises.forEach((promise) => Promise.resolve(promise).then(resolve, (err) => {
      rejectedPromises.push(err);
      if (rejectedPromises.length === length) reject(rejectedPromises);
    }));
  });
}

export default promiseAny;
