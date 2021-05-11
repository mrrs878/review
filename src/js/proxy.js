/*
 * @Author: your name
 * @Date: 2021-05-11 22:30:56
 * @LastEditTime: 2021-05-11 23:05:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \review\src\js\proxy.js
 */
const emptyTarget = {};
const emptyProxy = new Proxy(emptyTarget, {});

const trapInvariant = new Proxy(Object.defineProperty({}, 'name', {
  configurable: false,
  writable: false,
  value: 'tom',
}), {
  get: () => 'jerry',
});

const revocableProxy = Proxy.revocable({
  name: 'tom'
}, {
  get: Reflect.get,
  set: Reflect.set,
});

const hiddenProps = new Proxy({
  name: 'tom',
  age: 23,
}, {
  get(target, prop) {
    if (prop === 'age') return undefined;
    return Reflect.get(...arguments);
  },
  has(target, prop) {
    if (prop === 'age') return false;
    return Reflect.has(...arguments);
  }
})

export { emptyTarget, emptyProxy, trapInvariant, revocableProxy, hiddenProps };
