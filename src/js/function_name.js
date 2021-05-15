/*
 * @Author: mrrs878@foxmail.com
 * @Date: 2021-05-15 22:35:32
 * @LastEditTime: 2021-05-15 22:44:23
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

export {
  fn1, fn2, fn3, fn4, obj,
};
