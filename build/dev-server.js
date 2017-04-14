const webpack = require('webpack');
const webpackConf = require('./webpack.dev.conf');
const ora = require('ora');

const spinner = ora('构建中...');
spinner.start();

console.log('开始构建');
webpack(webpackConf, (err) => {
  spinner.stop();
  if (err) throw err;
  console.log('构建成功');
});