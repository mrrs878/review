/* eslint-disable max-classes-per-file */
/*
 * @Author: mrrs878@foxmail.com
 * @Date: 2022-09-02 19:08:44
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2022-09-02 19:46:05
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
  constructor(execute, undo, serialize, value) {
    this.execute = execute;
    this.undo = undo;
    this.serialize = serialize;
    this.value = value;
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
    super(UpdateCommand.execute, UpdateCommand.undo, UpdateCommand.serialize, UpdateCommand.value);
    this.key = key;
    this.value = value;
    this.oldValue = null;
  }

  static execute() {
    if (db[this.key]) {
      this.oldValue = db[this.key];
      db[this.key] = this.value;
    }
  }

  static undo() {
    if (this.oldValue) {
      db[this.key] = this.oldValue;
    }
  }

  static serialize() {
    return JSON.stringify({
      type: 'Command',
      action: 'update',
      key: this.key,
    });
  }
}

class CreateCommand extends Command {
  constructor(key, value) {
    super(CreateCommand.execute, CreateCommand.undo, CreateCommand.serialize, value);
    this.key = key;
    this.value = value;
  }

  static execute() {
    if (db[this.key]) {
      return;
    }
    db[this.key] = this.value;
  }

  static undo() {
    delete db[this.key];
  }

  static serialize() {
    return JSON.stringify({
      type: 'Command',
      action: 'create',
      key: this.key,
    });
  }
}

class DeleteCommand extends Command {
  constructor(key) {
    super(DeleteCommand.execute, DeleteCommand.undo, DeleteCommand.serialize);
    this.key = key;
    this.oldValue = null;
  }

  static execute() {
    if (db[this.key]) {
      this.oldValue = db[this.key];
      delete db[this.key];
    }
  }

  static undo() {
    db[this.key] = this.oldValue;
  }

  static serialize() {
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
