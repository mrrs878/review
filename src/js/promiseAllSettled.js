/*
 * @Date: 2021-05-31 16:07:22
 * @Author: mrrs878@foxmail.com
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2021-05-31 16:18:38
 * @FilePath: /review/src/js/promiseAllSettled.js
 */
const PromiseStatus = {
  resolved: 'fulfilled',
  rejected: 'rejected',
};
function promiseAllSettled1(promises) {
  if (!promises[Symbol.iterator]) throw new TypeError('promises must be iterable');
  const onResolve = (value) => ({ status: PromiseStatus.resolved, value });
  const onReject = (reason) => ({ status: PromiseStatus.rejected, reason });
  return Promise.all(promises.map((promise) => Promise.resolve(promise).then(onResolve, onReject)));
}

function promiseAllSettled2(promises) {
  if (!promises[Symbol.iterator]) throw new TypeError('promises must be iterable');
  return new Promise((resolve) => {
    const res = [];
    promises.map((promise) => Promise.resolve(promise).then((value) => {
      res.push({ status: PromiseStatus.resolved, value });
      if (res.length === promises.length) resolve(res);
    }, (reason) => {
      res.push({ status: PromiseStatus.rejected, reason });
      if (res.length === promises.length) resolve(res);
    }));
  });
}

export { promiseAllSettled1, promiseAllSettled2 };
