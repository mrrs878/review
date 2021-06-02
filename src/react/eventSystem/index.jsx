/*
 * @Date: 2021-06-02 15:38:28
 * @Author: mrrs878@foxmail.com
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2021-06-02 16:19:49
 * @FilePath: /review/src/react/eventSystem/index.jsx
 */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Modal({ title }) {
  return (
    <div role="main" className="modal-c" onClick={(e) => e.stopPropagation()}>
      <p>{title}</p>
    </div>
  );
}

function App() {
  const [isShowModal, setIsShowModal] = useState(false);
  return (
    <div
      className="app"
      role="main"
      onClick={() => {
        setIsShowModal(false);
        console.log(111);
      }}
    >
      {isShowModal && <Modal title="hello" />}
      <button
        type="button"
        onClick={(e) => {
          setIsShowModal(true);
          e.stopPropagation();
        }}
      >
        show modal
      </button>
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById('root'));
