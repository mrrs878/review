/*
 * @Author: your name
 * @Date: 2021-05-11 13:28:10
 * @LastEditTime: 2021-05-11 18:29:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /review/src/js/async_add.js
 */

/*
  异步求和

  原文地址: 一道字节笔试题，实现一个异步求和函数 https://mp.weixin.qq.com/s/RBk-cLUU-ZT4ylqIR2XdJg
*/

// 提供一个异步 add 方法如下，需要实现一个 await sum(...args) 函数：
function asyncAdd(a, b, callback) {
  setTimeout(() => {
    callback(null, a + b);
  }, 1000);
}

function sum2(a, b) {
  return new Promise((resolve, reject) => {
    asyncAdd(a, b, (err, res) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
}

function sum(...args) {
  if (args.length === 0) return Promise.resolve(0);
  if (args.length === 1) return Promise.resolve(args[0]);
  return new Promise((resolve) => {
    args.reduce(
      (pre, cur) => pre.then((total) => sum2(total, cur)),
      Promise.resolve(0),
    ).then(resolve);
  });
}

export default sum;
