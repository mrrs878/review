/*
 * @Date: 2021-06-30 17:01:10
 * @Author: mrrs878@foxmail.com
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2021-06-30 18:46:07
 * @FilePath: /review/src/js/parseUrl.js
 */

/**
 * @description:
 * @param {string} url
 * @return {object}
 */
function parseUrl(url) {
  if (url === '') return {};

  const queryString = url.match(/\?([^/?#:]+)#?/)?.[1];
  if (!queryString) return {};

  const isNumber = (v) => v.match(/^\d+$/);
  const isObject = (v) => v.match(/(\[\w+\])|(\w.\w)$/g);
  const shakePath = (v) => v.replace(/\[\]$/g, '');
  const formatPath = (v) => v.split('.').reduce((pre, cur) => `${pre}[${cur}]`);

  const res = queryString.split('&').reduce((params, block) => {
    const tmp = JSON.parse(JSON.stringify(params));
    const [k, v] = block.split('=');

    let key = decodeURIComponent(k);
    let value = decodeURIComponent(v);

    key = shakePath(key);
    key = isObject(key) ? formatPath(key) : key;
    value = isNumber(value) ? parseInt(value, 10) : value;

    tmp[key] = tmp[key] ? [].concat(tmp[key], value) : value;

    return tmp;
  }, {});

  return res;
}

export { parseUrl };
