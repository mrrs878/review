/*
 * @Date: 2021-06-05 17:09:19
 * @Author: mrrs878@foxmail.com
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2021-06-05 18:17:39
 * @FilePath: \review\src\algorithm\lru.test.js
 */
import LRUCache from './lru';

describe('lru', () => {
  test('case1', () => {
    const cache = new LRUCache(2 /* 缓存容ᰁ */);

    cache.put(1, 1);
    cache.put(2, 2);
    expect(cache.get(1)).toEqual(1); // 返回 1
    cache.put(3, 3);
    expect(cache.get(2)).toEqual(-1); // 返回 -1 (未找到)
    cache.put(4, 4); // 该操作会使得密钥 1 作废
    expect(cache.get(1)).toEqual(-1); // 返回 -1 (未找到)
    expect(cache.get(3)).toEqual(3); // 返回 3
    expect(cache.get(4)).toEqual(4);
  });

  test('case2', () => {
    const cache = new LRUCache(2);
    cache.put(2, 1);
    cache.put(2, 2);
    expect(cache.get(2)).toEqual(2);
    cache.put(1, 1);
    cache.put(4, 1);
    expect(cache.get(2)).toEqual(-1);
  });
});
