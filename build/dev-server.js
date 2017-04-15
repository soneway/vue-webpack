const webpack = require('webpack');
const webpackConf = require('./webpack.dev.conf');
const ora = require('ora');

console.log('***开始构建***');
const spinner = ora('构建中...');
spinner.start();

webpack(webpackConf, (err, stats) => {
  spinner.stop();

  // 抛出错误
  if (err) throw err;

  // 错误信息
  const errors = stats.compilation.errors;
  if (errors) {
    return errors.forEach((error) => {
      const errInfo = typeof error === 'object' ? error.message : error;
      console.log(`发生错误: ${errInfo}`);
    });
  }
  console.log('构建成功');
});