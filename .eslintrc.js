/*
 * @Author: mrrs878@foxmail.com
 * @Date: 2021-02-23 11:22:06
 * @LastEditTime: 2021-07-01 10:01:07
 * @LastEditors: mrrs878@foxmail.com
 * @Description: In User Settings Edit
 * @FilePath: /review/.eslintrc.js
 */
module.exports = {
  extends: ['airbnb', 'airbnb/hooks'],
  plugins: ['jest'],
  ignorePatterns: ['**/build/*'],
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
    'import/prefer-default-export': 0,
  },
  env: {
    'jest/globals': true,
    browser: true,
    node: true,
  },
};
