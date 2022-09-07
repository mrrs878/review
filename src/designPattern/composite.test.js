/*
 * @Author: mrrs878@foxmail.com
 * @Date: 2022-09-07 17:45:30
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2022-09-07 17:58:11
 * @FilePath: /review/src/designPattern/composite.test.js
 */

import { File, Folder } from './composite';

describe('composite pattern', () => {
  it('scan', () => {
    console.log = jest.fn();

    const folder = new Folder('folder');
    const folder1 = new Folder('folder1');
    const folder2 = new Folder('folder2');
    const file = new File('file1');

    folder.add(folder1);
    folder.add(folder2);
    folder1.add(file);

    folder.scan();

    expect(console.log).toHaveBeenCalledWith('开始扫描文件夹：folder');
    expect(console.log).toHaveBeenCalledWith('开始扫描文件夹：folder1');
    expect(console.log).toHaveBeenCalledWith('开始扫描文件：file1');
    expect(console.log).toHaveBeenCalledWith('开始扫描文件夹：folder2');
  });
});
