/*
 * @Date: 2021-06-03 15:36:35
 * @Author: mrrs878@foxmail.com
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2021-06-03 18:13:47
 * @FilePath: /review/src/algorithm/dfs.js
 */
function dfs(container) {
  const parent = container instanceof HTMLElement ? container : document.querySelector(container);
  const nodes = [];
  if (!parent) throw new TypeError('container must be an element or a selector');

  function perform(element) {
    nodes.push(element);
    Array.from(element.children).forEach(perform);
  }
  perform(parent);
  return nodes;
}

export default dfs;
