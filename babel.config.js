/*
 * @Date: 2021-06-08 13:31:46
 * @Author: mrrs878@foxmail.com
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2021-06-08 13:33:36
 * @FilePath: /review/babel.config.js
 */
/*
 * @Date: 2021-06-08 13:28:33
 * @Author: mrrs878@foxmail.com
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2021-06-08 13:29:35
 * @FilePath: /review/babel.config.js
 */
module.exports = function (api) {
  api.cache(true);

  const plugins = [];
  const presets = ['@babel/preset-env'];

  return {
    plugins,
    presets,
  };
};
