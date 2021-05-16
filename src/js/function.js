/*
 * @Author: mrrs878@foxmail.com
 * @Date: 2021-05-15 22:35:32
 * @LastEditTime: 2021-05-16 21:02:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \review\src\js\function_name.js
 */
function fn1() {}

// eslint-disable-next-line no-new-func
const fn2 = new Function();

const obj = {
  get name() {
    return 'tom';
  },
};

const fn3 = fn1.bind(undefined);

const fn4 = () => {};

function factorial(num) {
  let tmp = num;
  if (tmp < 1) return 1;
  let res = 1;
  function fn() {
    res *= tmp;
    tmp -= 1;
    if (tmp !== 0) return fn();
    return res;
  }
  return fn();
}

function factorialPerform(num) {
  function fn(m, n) {
    if (n === 1) return m;
    return fn(m * n, n - 1);
  }

  return fn(num, num - 1);
}

function fib(num) {
  if (num < 2) return num;
  return fib(num - 1) + fib(num - 2);
}

function fibPerform(num) {
  function fibImpl(m, n, x) {
    if (x === 0) return m;
    return fibImpl(n, m + n, x - 1);
  }

  return fibImpl(0, 1, num);
}

export {
  fn1, fn2, fn3, fn4, obj, factorial, factorialPerform, fib, fibPerform,
};
