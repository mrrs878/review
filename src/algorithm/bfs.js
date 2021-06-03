/*
 * @Date: 2021-06-03 17:47:43
 * @Author: mrrs878@foxmail.com
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2021-06-03 18:10:47
 * @FilePath: /review/src/algorithm/bfs.js
 */
function bfs(container) {
  const parent = container instanceof HTMLElement ? container : document.querySelector(container);
  if (!parent) throw new TypeError('container must be an element or a selector');
  const nodes = [];
  const stack = [parent];

  while (stack.length) {
    const son = stack.shift();
    nodes.push(son);
    Array.from(son.children).forEach((item) => stack.push(item));
  }

  return nodes;
}

export default bfs;
