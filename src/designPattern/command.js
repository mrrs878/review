/* eslint-disable class-methods-use-this */
/* eslint-disable max-classes-per-file */
/*
 * @Author: mrrs878@foxmail.com
 * @Date: 2022-09-02 19:08:44
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2022-09-04 10:45:06
 * @Description:
 *
 *  命令模式
 *
 *  通用结构：
 *    Command: 各个command功能实现
 *    CommandManager: 管理调用Command
 */

const db = {};

class Command {
  execute() {
    throw new Error('子类应该实现execute方法');
  }

  undo() {
    throw new Error('子类应该实现undo方法');
  }

  serialize() {
    throw new Error('子类应该实现serialize方法');
  }
}

class CommandManager {
  constructor() {
    this.executeHistory = [];
    this.undoHistory = [];
  }

  execute(command) {
    this.executeHistory.push(command);
    command.execute();
    console.log(`Execute command ${command.serialize()}`);
  }

  undo() {
    const command = this.executeHistory.pop();
    if (command) {
      this.undoHistory.push(command);
      command.undo();
      console.log(`Undo command ${command.serialize()}`);
    }
  }

  redo() {
    const command = this.undoHistory.pop();
    if (command) {
      this.executeHistory.push(command);
      command.execute();
      console.log(`Redo command ${command.serialize()}`);
    }
  }
}

class UpdateCommand extends Command {
  constructor(key, value) {
    super();
    this.key = key;
    this.value = value;
    this.oldValue = null;
  }

  execute() {
    if (db[this.key]) {
      this.oldValue = db[this.key];
      db[this.key] = this.value;
    }
  }

  undo() {
    if (this.oldValue) {
      db[this.key] = this.oldValue;
    }
  }

  serialize() {
    return JSON.stringify({
      type: 'Command',
      action: 'update',
      key: this.key,
    });
  }
}

class CreateCommand extends Command {
  constructor(key, value) {
    super();
    this.key = key;
    this.value = value;
  }

  execute() {
    if (db[this.key]) {
      return;
    }
    db[this.key] = this.value;
  }

  undo() {
    delete db[this.key];
  }

  serialize() {
    return JSON.stringify({
      type: 'Command',
      action: 'create',
      key: this.key,
    });
  }
}

class DeleteCommand extends Command {
  constructor(key) {
    super();
    this.key = key;
    this.oldValue = null;
  }

  execute() {
    if (db[this.key]) {
      this.oldValue = db[this.key];
      delete db[this.key];
    }
  }

  undo() {
    db[this.key] = this.oldValue;
  }

  serialize() {
    return JSON.stringify({
      type: 'Command',
      action: 'delete',
      key: this.key,
    });
  }
}

export {
  db,
  CommandManager,
  CreateCommand,
  UpdateCommand,
  DeleteCommand,
};
