/*
 * @Date: 2021-06-30 17:01:10
 * @Author: mrrs878@foxmail.com
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2021-06-30 23:39:52
 * @FilePath: \review\src\js\parseUrl.js
 */

/**
 * @description:
 * @param {Object} obj
 * @param {string} path
 * @return {*}
 */
const getValue = (obj, path) => path.reduce((pre, cur) => {
  // eslint-disable-next-line no-param-reassign
  if (!pre[cur]) pre[cur] = {};
  return pre[cur];
}, obj);

/**
 * @description:
 * @param {Object} obj
 * @param {Array<string>} path
 * @param {*} value
 * @return {*}
 */
function setProp(obj, path, value) {
  const { length } = path;
  const prop = path.slice(length - 1);

  const target = getValue(obj, path.slice(0, length - 1)) || {};
  target[prop] = value;
}

/**
 * @description:
 * @param {string} url
 * @return {object}
 */
function parseUrl(url) {
  if (url === '') return {};

  const [, queryString] = url.match(/\?([^/?#:]+)#?/) || [];
  if (!queryString) return {};

  const formatKeyIfArray = (v) => v.replace(/\[\]$/g, '');
  const formatKeyIfObject = (v) => v.replace(/\[/, '.').replace(/\]/, '');
  const formatValueIfNumber = (v = '') => (v.match(/^\d+$/) ? parseInt(v, 10) : v);

  const res = queryString.split('&').reduce((params, block) => {
    const tmp = JSON.parse(JSON.stringify(params));
    const [k, v] = block.split('=');

    let key = decodeURIComponent(k);
    let value = v ? decodeURIComponent(v) : undefined;

    key = formatKeyIfArray(key);
    key = formatKeyIfObject(key);
    value = formatValueIfNumber(value);

    if (tmp[key]) {
      tmp[key] = [].concat(tmp[key], value);
    } else setProp(tmp, key.split('.'), value);

    return tmp;
  }, {});

  return res;
}

export { parseUrl };
