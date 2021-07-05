/*
 * @Author: mrrs878@foxmail.com
 * @Date: 2021-07-05 22:34:28
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2021-07-05 22:34:50
 * @FilePath: \review\src\js\shuffle.js
 */
const shuffle = (list) => list.sort(() => Math.random() - 0.5);

export { shuffle };
