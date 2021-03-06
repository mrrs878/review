/*
 * @Author: mrrs878@foxmail.com
 * @Date: 2021-05-13 10:23:06
 * @LastEditTime: 2021-05-13 23:19:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /review/src/js/setTimeout.js
 */
function mySetTimeout(cb, timeout) {
  let startTime = NaN;

  const loop = (timestamp) => {
    if (Number.isNaN(startTime)) startTime = timestamp;
    const timer = window.requestAnimationFrame(loop);
    if (timestamp - startTime >= timeout) {
      cb(timer);
      window.cancelAnimationFrame(timer);
    }
  };

  return window.requestAnimationFrame(loop);
}

function mySetInterval(cb, interval) {
  let startTime = NaN;

  const loop = (timestamp) => {
    if (Number.isNaN(startTime)) startTime = timestamp;
    const timer = window.requestAnimationFrame(loop);
    if (timestamp - startTime >= interval) {
      cb(timer);
      startTime = NaN;
    }
  };
  return window.requestAnimationFrame(loop);
}

export { mySetInterval, mySetTimeout };
