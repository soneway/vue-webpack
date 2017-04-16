const webpackMerge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

// 基础配置
const webpackConf = require('./webpack.base.conf');

// dev配置
module.exports = webpackMerge(webpackConf, {
  watch: true,
  output: {
    path: path.join(__dirname, '../dev')
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'main.html',
      template: './src/main.html'
    })
  ]
});