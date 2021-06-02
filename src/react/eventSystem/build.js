/*
 * @Date: 2021-06-02 15:49:40
 * @Author: mrrs878@foxmail.com
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2021-06-02 16:25:40
 * @FilePath: /review/src/react/eventSystem/build.js
 */
const { build } = require('esbuild');
const { exec } = require('child_process');

const generateBuild = async () => {
  await build({
    entryPoints: ['./index.jsx'],
    outfile: './build/out.js',
    minify: false,
    bundle: true,
    sourcemap: true,
    watch: true,
    logLevel: 'info',
    define: {
      'process.env.NODE_ENV': "'development'",
    },
  }).then(() => {
    exec(`live-server --port=${8086}`);
  }).catch(() => process.exit(1));
};

generateBuild();
