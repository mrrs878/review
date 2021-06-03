/*
 * @Date: 2021-06-03 16:24:25
 * @Author: mrrs878@foxmail.com
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2021-06-03 18:13:34
 * @FilePath: /review/src/algorithm/dfs.test.js
 */
import dfs from './dfs';

describe('dfs', () => {
  test('html elements', () => {
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

    const nodes = dfs('#app').map((item) => item.title);
    expect(nodes).toEqual(['app', 'header', 'main', 'account-info', 'left', 'record', 'footer']);
  });

  test('element', () => {
    const nodes = dfs(document.querySelector('#app')).map((item) => item.title);
    expect(nodes).toEqual(['app', 'header', 'main', 'account-info', 'left', 'record', 'footer']);
  });

  test('dose not exist', () => {
    try {
      dfs(document.querySelector('#app1')).map((item) => item.title);
    } catch (e) {
      expect(e).toBeInstanceOf(TypeError);
      expect(e.message).toEqual('container must be an element or a selector');
    }
  });
});
