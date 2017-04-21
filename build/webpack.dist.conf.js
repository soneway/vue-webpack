const webpackMerge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const srcHelper = require('./src-helper');

// 基础配置
const webpackConf = require('./webpack.base.conf');
// html模板
const templates = srcHelper.getTemplate();
const templatePlugins = templates.map((item) => {
  item.minify = true;
  return new HtmlWebpackPlugin(item);
});

// dev配置
module.exports = webpackMerge(webpackConf, {
  watch: true,
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].[chunck].js'
  },
  plugins: [
    ...templatePlugins
  ]
});