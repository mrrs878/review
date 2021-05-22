/*
 * @Author: mrrs878@foxmail.com
 * @Date: 2021-05-19 15:54:30
 * @LastEditTime: 2021-05-19 16:59:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /review/src/network/contentLength/contentLength.test.js
 */
import express from 'express';
import request from 'supertest';

const app = express();

describe('content-length', () => {
  try {
    test('normal', async () => {
      app.get('/', (req, res) => {
        res.setHeader('Content-Length', 11);
        res.write('hello world');
      });

      const res = await request(app).get('/');
      expect(res.headers['content-length']).toEqual('11');
      expect(res.text).toEqual('hello world');
    });
  } catch (e) {
    console.log(e);
  }
});
