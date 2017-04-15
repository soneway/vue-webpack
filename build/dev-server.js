const webpack = require('webpack');
const webpackConf = require('./webpack.dev.conf');
const ora = require('ora');

const spinner = ora('构建中...');
spinner.start();

webpack(webpackConf, (err, stats) => {
  spinner.stop();

  // 抛出错误
  if (err) throw err;

  // 错误信息
  const errors = stats.compilation.errors;
  if (errors) {
    return console.log(errors);
  }
  console.log('构建成功');
});