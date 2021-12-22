/*
 * @Author: mrrs878@foxmail.com
 * @Date: 2021-12-22 21:25:52
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2021-12-22 21:38:10
 */

// eslint-disable-next-line no-underscore-dangle
let _state;

function useState(initialState) {
  _state = _state || initialState;

  const setState = (newState) => {
    _state = typeof newState === 'function' ? newState(_state) : newState;
  };

  return [
    _state,
    setState,
  ];
}

export { useState };
