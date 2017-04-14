const webpackMerge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// 配置
const webpackConf = require('./webpack.conf');

module.exports = webpackMerge(webpackConf, {
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'main.html',
      template: './src/main.html'
    })
  ]
});