/*
 * @Date: 2021-06-05 16:48:10
 * @Author: mrrs878@foxmail.com
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2021-06-05 18:28:43
 * @FilePath: \review\src\algorithm\lru.js
 */
class LRUCache {
  constructor(max) {
    this.max = max;
    this.storage = new Map();
  }

  get(key) {
    if (!this.storage.has(key)) return -1;
    const tmp = this.storage.get(key);
    this.storage.delete(key);
    this.storage.set(key, tmp);
    return tmp;
  }

  put(key, value) {
    if (this.storage.has(key)) {
      this.storage.delete(key);
    } else if (this.storage.size >= this.max) {
      this.storage.delete(this.storage.keys().next().value);
    }
    this.storage.set(key, value);
  }
}

export default LRUCache;
