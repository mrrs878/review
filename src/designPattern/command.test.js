/*
 * @Author: mrrs878@foxmail.com
 * @Date: 2022-09-02 19:29:53
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2022-09-02 19:33:46
 * @FilePath: /review/src/designPattern/command.test.js
 */

import {
  db, CommandManager, CreateCommand, UpdateCommand, DeleteCommand,
} from './command';

describe('test command', () => {
  const commandManager = new CommandManager();

  it('execute', () => {
    expect(db).toEqual({});

    commandManager.execute(new CreateCommand('name', 'tom'));
    expect(db).toEqual({ name: 'tom' });

    commandManager.execute(new CreateCommand('age', 24));
    expect(db).toEqual({ name: 'tom', age: 24 });
  });

  it('undo & redo', () => {
    commandManager.execute(new CreateCommand('address', 'usa'));
    expect(db).toEqual({ name: 'tom', age: 24, address: 'usa' });

    commandManager.execute(new UpdateCommand('age', 25));
    expect(db).toEqual({ name: 'tom', age: 25, address: 'usa' });

    commandManager.execute(new DeleteCommand('address'));
    expect(db).toEqual({ name: 'tom', age: 25 });

    commandManager.undo();
    expect(db).toEqual({ name: 'tom', age: 25, address: 'usa' });

    commandManager.redo();
    expect(db).toEqual({ name: 'tom', age: 25 });
  });
});
