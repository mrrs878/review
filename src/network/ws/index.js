/*
 * @Author: mrrs878@foxmail.com
 * @Date: 2021-05-10 11:25:49
 * @LastEditTime: 2021-05-13 13:29:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /review/network/ws/index.js
 */
const express = require('express');
const ws = require('ws');

const app = express();
const wsServer = new ws.Server({ port: 8080 });

wsServer.on('connection', (wss) => {
  console.log('server: connected to a client');
  wss.on('message', (msg) => {
    console.log(`server: message receive from client----${msg}`);
  });
  wss.send('hello client');
  wss.ping('', false, () => {});
});

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

app.listen(3000);
