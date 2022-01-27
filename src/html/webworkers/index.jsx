/*
 * @Author: mrrs878@foxmail.com
 * @Date: 2022-01-27 10:46:39
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2022-01-27 23:23:15
 * @FilePath: /review/src/html/webworkers/index.jsx
 */

import { useEffect, useState, useRef } from 'react';

import { filter, Filter } from './filter';
import worker from './worker';

const Image = () => {
  const previewCanvasRef = useRef(null);
  const [imageResolution, setImageResolution] = useState([0, 0]);
  const [currentFilter, setCurrentFilter] = useState(Filter.warm);
  const [time, setTime] = useState(0);
  const [pointer, setPointer] = useState(0);
  const tid = useRef();
  const workerInstance = useRef();

  useEffect(() => {
    const code = worker.toString();
    const blob = new Blob([`(${code})()`]);
    const w = new Worker(URL.createObjectURL(blob));

    workerInstance.current = w;
  }, []);

  useEffect(() => {
    tid.current = setInterval(() => {
      setPointer((pre) => pre + 1);
    }, 500);
    return () => {
      clearInterval(tid.current);
      tid.current = null;
    };
  }, []);

  const applyFilter = () => {
    const startTimestamp = Date.now();
    const { width, height } = previewCanvasRef.current;
    const previewCtx = previewCanvasRef.current?.getContext('2d');
    const imageData = previewCtx.getImageData(0, 0, width, height);
    // workerInstance.current.postMessage({ imageData, currentFilter });
    // workerInstance.current.onmessage = (message) => {
    //   const { imageData: newImageData } = message.data;
    //   previewCtx.putImageData(newImageData, 0, 0);
    //   setTime(() => Date.now() - startTimestamp);
    //   clearInterval(tid.current);
    //   tid.current = null;
    // };
    filter(imageData, currentFilter);
    previewCtx.putImageData(imageData, 0, 0);
  };

  const onSelectFile = async (e) => {
    try {
      const [file] = e.target.files;

      setTime(0);
      setImageResolution([0, 0]);

      const bitmap = await createImageBitmap(file);
      const previewCtx = previewCanvasRef.current?.getContext('2d');

      const dpr = window.devicePixelRatio;
      const logicalWidth = 600;
      const logicalHeight = (bitmap.height / bitmap.width) * logicalWidth;

      setImageResolution([bitmap.width, bitmap.height]);

      previewCanvasRef.current.width = bitmap.width * dpr;
      previewCanvasRef.current.height = bitmap.height * dpr;
      previewCanvasRef.current.style.width = `${logicalWidth}px`;
      previewCanvasRef.current.style.height = `${logicalHeight}px`;

      previewCtx.scale(dpr, dpr);

      previewCtx.drawImage(bitmap, 0, 0, bitmap.width, bitmap.height);
    } catch (e1) {
      console.log(e1);
    }
  };

  const onFilterChange = (e) => {
    const { value } = e.target;
    setCurrentFilter(value);
  };

  return (
    <div>
      <div>
        <label htmlFor="filter">
          filter：
          <select name="filter" id="filter" value={currentFilter} onChange={onFilterChange}>
            <option value={Filter.warm}>warm</option>
            <option value={Filter.cold}>cold</option>
          </select>
        </label>
      </div>
      <br />
      <div>
        <label htmlFor="input">
          Choose File：
          <input type="file" name="input" accept="image/*" id="input" onChange={onSelectFile} />
        </label>
      </div>
      <br />
      <div>
        <button type="button" onClick={applyFilter}>apply filter</button>
      </div>
      <br />
      <div>
        {pointer}
      </div>
      <br />
      <div>
        <span>
          Resolution:&nbsp;
          { imageResolution[0] }
          {' '}
          x
          {' '}
          { imageResolution[1] }
        </span>
        &emsp;
        <span>
          Time:
          {' '}
          {time}
          ms
        </span>
      </div>
      <br />
      <canvas id="preview" width={600} ref={previewCanvasRef} />
    </div>
  );
};

export { Image };
