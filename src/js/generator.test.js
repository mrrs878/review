/*
 * @Author: mrrs878@foxmail.com
 * @Date: 2021-05-13 13:09:51
 * @LastEditTime: 2021-05-13 13:19:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /review/src/js/generator.test.js
 */
import generatorFn from './generator';

test('generator', () => {
  const iter = generatorFn(5);
  const x = iter.next(10);
  const y = iter.next(20);
  const z = iter.next(10);

  expect(x.value + y.value + z.value).toEqual(96);
  expect(z.done).toBeTruthy();
});
