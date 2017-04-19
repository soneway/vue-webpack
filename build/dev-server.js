const webpack = require('webpack');
const webpackConf = require('./webpack.dev.conf');
const ora = require('ora');
const express = require('express');

console.log('<<<开始构建<<<');
const spinner = ora('构建中...');
spinner.start();

// 构建
webpack(webpackConf, (err, stats) => {
  spinner.stop();

  // 抛出错误
  if (err) throw err;

  // 错误信息
  const errors = stats.compilation.errors;
  // 有错误信息
  if (errors.length) {
    return errors.forEach((error) => {
      const errInfo = typeof error === 'object' ? error.message : error;
      console.log(`发生错误: ${errInfo}`);
    });
  }
  console.log('构建成功');
});

// server
const app = express();
app.use(express.static('dev'));
app.listen('8080', () => {
  console.log('请访问: localhost:8080');
});