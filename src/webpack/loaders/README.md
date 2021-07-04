<!--
 * @Author: mrrs878@foxmail.com
 * @Date: 2021-07-04 17:18:22
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2021-07-04 17:21:20
 * @FilePath: \review\src\webpack\loaders\README.md
-->

# 自定义loader

一个编译.tpl文件的，会暴露出一个`tpl(options)`方法，调用后会编译该模板文件

``` html
<!-- info.tpl -->
<div>
  <h1>{{ name }}</h1>
  <p>{{ age }}</p>
  <p>{{ address }}</p>
</div>
```

``` js
// index.js 入口文件
import tpl from './info.tpl';

const userInfo = {
  name: 'tom',
  age: 23,
  address: 'America',
};

const html = tpl(userInfo);

document.querySelector('#app').innerHTML = html;
```

webpack配置