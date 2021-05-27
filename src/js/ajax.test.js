/*
 * @Date: 2021-05-26 10:31:40
 * @Author: mrrs878@foxmail.com
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-05-27 14:57:35
 * @FilePath: /review/src/js/ajax.test.js
 */
import express from 'express';
import fetch from './ajax';

const bodyParser = (req, res, next) => {
  if (req.method === 'POST' && req.headers['content-type'] === 'application/json') {
    const buffers = [];
    req.on('data', (chunk) => buffers.push(chunk));
    req.on('end', () => {
      const tmp = JSON.parse(Buffer.concat(buffers).toString());
      req.body = tmp;
      next();
    });
  } else next();
};

const app = express();
app.use(bodyParser);

describe('ajax', () => {
  let server;

  beforeAll(() => {
    // server = app.listen(3004);
  });
  afterAll(() => {
    server?.close();
  });

  test.only('blank', () => expect(1).toEqual(1));
  test('get', async () => {
    app.get('/get', (req, res) => {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.json({ name: 'tom' });
    });
    const res = await fetch('http://localhost:3004/get');
    expect(res).toHaveProperty('name', 'tom');
  });

  test('post', async () => {
    app.post('/post', (req, res) => {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Methods', '*');
      res.json({ ...req.body, name: 'tom' });
    });
    const res = await fetch('http://localhost:3004/post', {
      data: { age: 23 },
      method: 'POST',
    });
    expect(res).toHaveProperty('name', 'tom');
    expect(res).toHaveProperty('age', 23);
  });
});
