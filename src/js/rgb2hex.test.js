/*
 * @Date: 2021-05-31 10:03:54
 * @Author: mrrs878@foxmail.com
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2021-05-31 10:09:14
 * @FilePath: /review/src/js/rgb2hex.test.js
 */
import rgb2hex from './rgb2hex';

describe('convert rgb(255, 255, 255) to #ffffff', () => {
  test('rgb(255, 255, 255)', () => {
    const hex = rgb2hex('rgb(255, 255, 255)');
    expect(hex).toEqual('#ffffff');
  });
  test('rgb(14, 14, 14)', () => {
    const hex = rgb2hex('rgb(14, 14, 14)');
    expect(hex).toEqual('#0e0e0e');
  });
});
