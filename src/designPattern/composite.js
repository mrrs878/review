/* eslint-disable class-methods-use-this */
/* eslint-disable max-classes-per-file */
/*
 * @Author: mrrs878@foxmail.com
 * @Date: 2022-09-07 09:55:06
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2022-09-07 21:45:48
 * @Description:
 *
 *  组合模式
 *
 *    组合模式将对象组合成属性结构，以表示「部分-整体」的层次结构。除了用来表示树形结构之外，
 *    组合模式的另一个好处是通过对象的多态性表现，使得用于对单个对象的使用具有一致性
 *
 *  在组合模式中，请求在树中传递的过程总是遵循一种逻辑：如果子节点是叶对象，叶对象自身会处理这个请求，
 *  而如果子节点还是组合对象， 请求会继续往下传递
 *
 *  组合模式要求：
 *
 *    1. 组合对象和叶对象拥有相同的接口
 *    2. 对一组叶对象的操作必须具有一致性
 *
 *  组合模式适用场景：
 *
 *    1. 表示对象的部分整体层次结构
 *    2. 客户希望统一对待树中的所有对象
 *
 *  缺点：
 *
 *    1. 创建太多对象
 *
 *  使用实例：文件夹、树状结构数据
 */

class Content {
  scan() {
    throw new Error('子类应该实现scan方法');
  }
}

class Folder extends Content {
  constructor(name) {
    super();
    this.name = name;
    this.files = [];
  }

  add(file) {
    this.files.push(file);
  }

  scan() {
    console.log(`开始扫描文件夹：${this.name}`);
    this.files.forEach((file) => {
      file.scan();
    });
  }
}

class File extends Content {
  constructor(name) {
    super();
    this.name = name;
  }

  scan() {
    console.log(`开始扫描文件：${this.name}`);
  }
}

export {
  File,
  Folder,
};
