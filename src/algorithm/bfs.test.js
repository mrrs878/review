/*
 * @Date: 2021-06-03 17:56:07
 * @Author: mrrs878@foxmail.com
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2021-06-03 18:13:12
 * @FilePath: /review/src/algorithm/bfs.test.js
 */
import bfs from './bfs';

describe('bfs', () => {
  beforeAll(() => {
    const app = `
      <div title="app" id="app">
        <header title="header"></header>
        <main title="main">
          <div title="account-info" class="account-info">
            <div title="left" class="left"></div>
          </div>
          <div title="record" class="record"></div>
        </main>
        <footer title="footer"></footer>
      </div>
    `;
    document.body.innerHTML = (app);
  });
  test('selector', () => {
    const nodes = bfs('#app').map((item) => item.title);
    expect(nodes).toEqual(['app', 'header', 'main', 'footer', 'account-info', 'record', 'left']);
  });

  test('element', () => {
    const nodes = bfs(document.querySelector('#app')).map((item) => item.title);
    expect(nodes).toEqual(['app', 'header', 'main', 'footer', 'account-info', 'record', 'left']);
  });

  test('dose not exist', () => {
    try {
      bfs(document.querySelector('#app1')).map((item) => item.title);
    } catch (e) {
      expect(e).toBeInstanceOf(TypeError);
      expect(e.message).toEqual('container must be an element or a selector');
    }
  });
});
