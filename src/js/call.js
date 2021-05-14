/*
 * @Author: your name
 * @Date: 2021-05-14 12:33:18
 * @LastEditTime: 2021-05-14 13:30:04
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

export { myApply, myCall };
