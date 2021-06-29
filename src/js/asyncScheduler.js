/*
 * @Date: 2021-06-28 22:41:53
 * @Author: mrrs878@foxmail.com
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2021-06-28 23:02:26
 * @FilePath: \review\src\js\asyncScheduler.js
 */
class Scheduler {
  constructor(limit) {
    this.limit = limit;
    this.asyncFuncs = [];
    this.running = false;
  }

  add(func) {
    const funcTmp = Array.isArray(func) ? func : [func];
    this.asyncFuncs = this.asyncFuncs.concat(funcTmp);
    let asyncFuncsRes = [];

    if (this.running) return Promise.resolve(asyncFuncsRes);

    return new Promise((resolve) => {
      const exec = async () => {
        const execFuncs = this.asyncFuncs.slice(0, this.limit);
        console.log('--');
        this.running = true;
        const res = await Promise.allSettled(execFuncs);
        asyncFuncsRes = asyncFuncsRes.concat(res);
        this.asyncFuncs = this.asyncFuncs.slice(this.limit);
        if (this.asyncFuncs.length !== 0) exec();
        else {
          this.running = false;
          resolve(asyncFuncsRes);
        }
      };

      exec();
    });
  }
}

export default Scheduler;
