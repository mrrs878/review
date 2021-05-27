/*
 * @Author: mrrs878@foxmail.com
 * @Date: 2021-02-23 11:22:06
 * @LastEditTime: 2021-05-27 14:59:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /dashboard_template/.eslintrc.js
 */
module.exports = {
  extends: ['airbnb', 'airbnb/hooks'],
  plugins: ['jest'],
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
    allowImportExportEverywhere: true,
    ecmaVersion: 2021,
  },
  rules: {
    'linebreak-style': ['off', 'window'],
    'no-console': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'func-names': 0,
    'no-underscore-dangle': ['error', { allow: ['_denounce', '_throttle'] }],
  },
  env: {
    'jest/globals': true,
    browser: true,
    node: true,
  },
};
