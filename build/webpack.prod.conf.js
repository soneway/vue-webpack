const webpackMerge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const srcHelper = require('./src-helper');

// 基础配置
const webpackConf = require('./webpack.base.conf');

// html处理
const templates = srcHelper.getTemplate();
const templatePlugins = templates.map((item) => {
  Object.assign(item, {
    // html压缩配置
    minify: {
      minifyCSS: true,
      minifyJS: true,
      removeComments: true,
      collapseWhitespace: true
    }
  });
  return new HtmlWebpackPlugin(item);
});

// js压缩
const uglifyJsPlugin = new webpack.optimize.UglifyJsPlugin({
  compress: {
    warnings: true
  }
});

// prod配置
module.exports = webpackMerge(webpackConf, {
  output: {
    path: path.join(__dirname, '../prod'),
    filename: '[name].[chunkhash].js'
  },
  plugins: [
    ...templatePlugins,
    uglifyJsPlugin
  ]
});
