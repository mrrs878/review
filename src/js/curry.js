/*
 * @Author: your name
 * @Date: 2021-05-27 16:54:27
 * @LastEditTime: 2021-05-27 16:56:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /review/src/js/curry.js
 */
function myCurry(fn) {
  return (...args) => (fn.length === args.length
    ? fn.call(null, ...args)
    : fn.bind(null, ...args));
}

export default myCurry;
