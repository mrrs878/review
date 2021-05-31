/*
 * @Author: mrrs878@foxmail.com
 * @Date: 2021-05-11 13:28:10
 * @LastEditTime: 2021-05-31 11:27:33
 * @LastEditors: mrrs878@foxmail.com
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

async function sumTmp(...args) {
  if (args.length === 1) return Promise.resolve(args[0]);
  const res = args.reduce(async (a, b) => sum2(await a, b), Promise.resolve(0));
  return res;
}

async function performanceSum(...args) {
  const tmp = JSON.parse(JSON.stringify(args));
  const { length } = tmp;
  if (length === 1) return Promise.resolve(tmp[0]);
  const resultArray = [];
  if (length % 2) tmp.push(0);
  for (let i = 0; i < tmp.length / 2; i += 1) {
    resultArray.push([tmp[i * 2], tmp[i * 2 + 1]]);
  }
  const res = await Promise.all(resultArray.map(([a, b]) => sum2(a, b)));
  return performanceSum(...res);
}

export { sum, sumTmp, performanceSum };
