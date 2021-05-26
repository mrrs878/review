/*
 * @Date: 2021-05-26 10:22:05
 * @Author: mrrs878@foxmail.com
 * @LastEditors: lihang.gw@heyqu.net
 * @LastEditTime: 2021-05-26 12:13:29
 * @FilePath: /review/src/js/ajax.js
 */
function fetch(url, options = {}) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(options.method || 'GET', url);
    const headers = { 'Content-Type': 'application/json', ...options.headers || {} };
    Reflect.ownKeys(headers)
      .forEach((header) => xhr.setRequestHeader(header, headers[header]));
    xhr.send(options.method === 'POST' ? JSON.stringify(options.data || {}) : null);
    xhr.onerror = (e) => reject(e);
    xhr.onreadystatechange = () => {
      if (xhr.readyState === XMLHttpRequest.DONE
        && [200, 201, 301, 302, 304].includes(xhr.status)) {
        resolve(JSON.parse(xhr.responseText));
      }
    };
  });
}

export default fetch;
