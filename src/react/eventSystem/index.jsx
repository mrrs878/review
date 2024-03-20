/*
 * @Date: 2021-06-02 15:38:28
 * @Author: mrrs878@foxmail.com
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2024-03-20 20:34:50
 * @FilePath: /review/src/react/eventSystem/index.jsx
 */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react';
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
  /** @type{React.MutableRefObject<HTMLDivElement>} */
  const mainRef = React.useRef();
  const childRef = React.useRef();

  useEffect(() => {
    const onMainClick = () => {
      console.log('main DOM');
    };

    const onChildClick = () => {
      console.log('child DOM');
    };

    const mainDOM = mainRef.current;
    const childDOM = childRef.current;

    mainDOM.addEventListener('click', onMainClick);
    childDOM.addEventListener('click', onChildClick);

    return () => {
      mainDOM.removeEventListener('click', onMainClick);
      childDOM.removeEventListener('click', onChildClick);
    };
  }, []);

  return (
    <div
      className="app"
      role="main"
      ref={mainRef}
      onClick={() => {
        console.log('main');
      }}
      onClickCapture={() => {
        console.log('main Capture');
      }}
    >
      <div
        role="main"
        className="child"
        ref={childRef}
        onClick={() => {
          console.log('child');
        }}
        onClickCapture={() => {
          console.log('child Capture');
        }}
      />
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById('root'));
