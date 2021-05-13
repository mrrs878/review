/*
 * @Author: your name
 * @Date: 2021-05-13 10:53:21
 * @LastEditTime: 2021-05-13 13:07:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /review/src/js/promise.test.js
 */
const PromiseStatus = {
  pending: 'pending',
  resolved: 'resolver',
  rejected: 'rejected',
};

class MyPromise {
  constructor(fn) {
    this.status = PromiseStatus.pending;
    this.value = null;
    this.resolvedCallbacks = [];
    this.rejectedCallbacks = [];

    const resolve = (value) => {
      if (this.status === PromiseStatus.pending) {
        this.status = PromiseStatus.resolved;
        this.value = value;
        this.resolvedCallbacks.forEach((cb) => cb(value));
      }
    };

    const reject = (value) => {
      if (this.status === PromiseStatus.pending) {
        this.status = PromiseStatus.rejected;
        this.value = value;
        this.rejectedCallbacks.forEach((cb) => cb(value));
      }
    };

    try {
      fn(resolve, reject);
    } catch (e) {
      this.reject(e);
    }
  }

  then(onFulfilled, onRejected) {
    return new MyPromise((resolve, reject) => {
      const onFulfilledTmp = typeof onFulfilled === 'function' ? (value) => resolve(onFulfilled(value)) : resolve;
      const onRejectedTmp = typeof onRejected === 'function' ? (value) => resolve(onRejected(value)) : reject;

      if (this.status === PromiseStatus.pending) {
        this.resolvedCallbacks.push(onFulfilledTmp);
        this.rejectedCallbacks.push(onRejectedTmp);
      }

      if (this.status === PromiseStatus.resolved) {
        onFulfilledTmp(this.value);
      }

      if (this.status === PromiseStatus.rejected) {
        onRejectedTmp(this.value);
      }
    });
  }

  catch(onRejected) {
    this.then(undefined, onRejected);
  }
}

export default MyPromise;
