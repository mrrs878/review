/*
 * @Date: 2021-05-31 18:31:10
 * @Author: mrrs878@foxmail.com
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2021-05-31 18:56:05
 * @FilePath: /review/src/js/weakMap.test.js
 */
describe('WeakMap', () => {
  function usedSize() {
    const used = process.memoryUsage().heapUsed;
    return Math.round((used / 1024 / 1024) * 100) / 100;
  }
  test('map', () => {
    global.gc();
    const map = new Map();
    let tom = new Array(5 * 1024 * 1024);
    map.set('tom', tom);
    const preGCMemSize = usedSize();
    tom = null;
    global.gc();
    const afterGCMemSize = usedSize();
    expect(preGCMemSize - afterGCMemSize).toBeLessThan(5);
  });

  test('WeakMap', () => {
    global.gc();
    const map = new WeakMap();
    let tom = new Array(5 * 1024 * 1024);
    map.set(tom, 'tom');
    const preGCMemSize = usedSize();
    tom = null;
    global.gc();
    const afterGCMemSize = usedSize();
    expect(preGCMemSize - afterGCMemSize).toBeGreaterThan(5);
  });
});
