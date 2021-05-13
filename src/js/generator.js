/*
 * @Author: your name
 * @Date: 2021-05-13 13:08:33
 * @LastEditTime: 2021-05-13 13:09:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /review/src/js/generator.js
 */
function* generatorFn(value) {
  const x = yield (value + 1);
  const y = x + (yield (x * 2));
  return x + y;
}

export default generatorFn;
