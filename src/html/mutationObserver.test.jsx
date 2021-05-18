/*
 * @Author: mrrs878@foxmail.com
 * @Date: 2021-05-18 16:28:10
 * @LastEditTime: 2021-05-18 18:03:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /review/src/html/mutationObserver.test.jsx
 */

import React, { useEffect, useRef, useState } from 'react';
import {
  fireEvent, render, screen, waitFor,
} from '@testing-library/react';

describe('MutationObserver', () => {
  beforeEach(() => {
    console.log = jest.fn();
  });

  test('attributes', async () => {
    const App = () => {
      const elementRef = useRef(null);

      const onElementClick = () => {
        elementRef.current.name = 'observer';
      };

      useEffect(() => {
        const observer = new MutationObserver((record) => {
          console.log(record[0].target.name);
        });
        observer.observe(elementRef.current, { attributes: true });
      }, []);
      return (
        <button ref={elementRef} type="button" onClick={onElementClick} title="button">click me</button>
      );
    };
    render(<App />);

    const btn = await screen.findByTitle('button');
    fireEvent.click(btn);

    await waitFor(() => expect(console.log).toBeCalledWith('observer'));
  });

  test('disconnect', async () => {
    const App = () => {
      const [observer, setObserver] = useState(null);
      const elementRef = useRef(null);

      const onElementClick = () => {
        elementRef.current.name = Date.now();
        setTimeout(() => observer.disconnect(), 0);
      };

      useEffect(() => {
        const observerTmp = new MutationObserver((record) => {
          console.log(record[0].target.name);
        });
        setObserver(observerTmp);
        observerTmp.observe(elementRef.current, { attributes: true });
      }, []);
      return (
        <button ref={elementRef} type="button" onClick={onElementClick} title="button">click me</button>
      );
    };

    render(<App />);

    const btn = await screen.findByTitle('button');
    fireEvent.click(btn);
    await waitFor(() => expect(console.log).toBeCalledTimes(1));
    fireEvent.click(btn);
    await waitFor(() => expect(console.log).toBeCalledTimes(1));
  });

  test('subtree & childList', async () => {
    const App = () => {
      const containerRef = useRef(null);
      const contentRef = useRef(null);
      const [isShow, setIsShow] = useState(false);

      const onElementClick = () => {
        contentRef.current.title = Date.now();
        setIsShow(true);
      };

      useEffect(() => {
        const observerTmp = new MutationObserver((record) => {
          console.log(record[0].target.name);
        });
        observerTmp.observe(containerRef.current, {
          subtree: true,
          attributes: true,
          childList: true,
        });
      }, []);
      return (
        <button ref={containerRef} type="button" onClick={onElementClick} title="container">
          <span ref={contentRef}>click me</span>
          {
            isShow && (<span>hello</span>)
          }
        </button>
      );
    };

    render(<App />);

    const container = await screen.findByTitle('container');
    fireEvent.click(container);
    await waitFor(() => expect(console.log).toBeCalledTimes(1));
    fireEvent.click(container);
    await waitFor(() => expect(console.log).toBeCalledTimes(2));
  });
});
