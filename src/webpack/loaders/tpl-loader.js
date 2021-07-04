/*
 * @Author: mrrs878@foxmail.com
 * @Date: 2021-07-04 17:16:54
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2021-07-04 17:18:11
 * @FilePath: \review\src\webpack\loaders\tpl-loader.js
 */

// eslint-disable-next-line import/no-extraneous-dependencies
const { getOptions } = require('loader-utils');

/**
 * @description:
 * @param {string} template
 * @param {object} obj
 * @return {*}
 */
function tplReplace(template, obj) {
  return template.replace(/\{\{(.*?)\}\}/g, (node, key) => obj[key]);
}

/**
 * @description:
 * @param {string} src
 * @return {string}
 */
function tplLoader(src) {
  const source = src.replace(/\s+/g, '');
  const { log } = getOptions(this);
  const logF = log ? `console.log('compiling ${this.resourcePath}')` : '';
  return `
    export default (options) => {
      ${tplReplace.toString()}

      ${logF.toString()}

      return tplReplace('${source}', options);
    }
  `;
}

module.exports = tplLoader;
