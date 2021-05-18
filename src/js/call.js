/*
 * @Author: mrrs878@foxmail.com
 * @Date: 2021-05-14 12:33:18
 * @LastEditTime: 2021-05-18 16:59:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /review/src/js/call.js
 */
function myCall(...args) {
  if (typeof this !== 'function') {
    throw new TypeError();
  }
  const [context] = args.length ? args : [window];

  Reflect.defineProperty(context, 'fn', { value: this });
  const result = context.fn(...args.slice(1));
  Reflect.deleteProperty(context, 'fn');
  return result;
}

function myApply(context = window, args = []) {
  if (typeof this !== 'function') {
    throw new TypeError();
  }

  Reflect.defineProperty(context, 'fn', { value: this });
  const result = context.fn(...args);
  Reflect.deleteProperty(context, 'fn');
  return result;
}

function myBind(context = window, ...args) {
  if (typeof this !== 'function') {
    throw new TypeError();
  }

  const That = this;
  return function F(...args2) {
    if (new.target) return new That(...args, ...args2);
    return That.apply(context, args.concat(args2));
  };
}

export { myApply, myCall, myBind };
