/*
 * @Author: your name
 * @Date: 2021-05-15 09:55:18
 * @LastEditTime: 2021-05-15 11:47:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \review\src\js\debounce.js
 */
function debounce(cb, timeout) {
  let timer = null;
  let canceled = false;
  function _denounce(...args) {
    let res;
    clearTimeout(timer);
    if (canceled) {
      res = cb.apply(this, args);
    } else {
      timer = setTimeout(() => {
        res = cb.apply(this, args);
      }, timeout);
    }

    return res;
  }

  _denounce.cancel = function () {
    canceled = true;
  };

  return _denounce;
}

function throttle(cb, timeout) {
  let lastTime = 0;
  let canceled = false;

  function _throttle(...args) {
    const now = Date.now();
    let res;
    if (canceled) {
      res = cb.apply(this, args);
    } else if (lastTime + timeout < now) {
      lastTime = now;
      res = cb.apply(this, args);
    }

    return res;
  }

  _throttle.cancel = () => {
    canceled = true;
  };

  return _throttle;
}

export { debounce, throttle };
