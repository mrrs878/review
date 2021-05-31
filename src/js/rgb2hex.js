/*
 * @Date: 2021-05-31 09:50:57
 * @Author: mrrs878@foxmail.com
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2021-05-31 10:08:17
 * @FilePath: /review/src/js/rgb2hex.js
 */
function rgb2hex(rgb) {
  const [r, g, b] = rgb.match(/\d+/g);
  return `#${
    [r, g, b].map((item) => (+item).toString(16).padStart(2, '0')).join('')
  }`;
}

export default rgb2hex;
