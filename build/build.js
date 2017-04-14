const webpack = require('webpack');
const webpackConf = require('./webpack.prod.conf');
const ora = require('ora');

const spinner = ora('building prod...');
spinner.start();

webpack(webpackConf, (err) => {
  spinner.stop();
  if (err) throw err;
  console.log('bild success');
});