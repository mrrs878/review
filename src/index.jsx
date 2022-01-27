/*
 * @Author: mrrs878@foxmail.com
 * @Date: 2022-01-27 11:02:33
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2022-01-27 23:07:29
 * @FilePath: /review/src/index.jsx
 */

import { render } from 'react-dom';
import { Image } from './html/webworkers';

console.log(process.env.REACT_APP_BUILD_TARGET);

if (process.env.REACT_APP_BUILD_TARGET === 'webworkers') {
  render(<Image />, document.querySelector('#root'));
}
