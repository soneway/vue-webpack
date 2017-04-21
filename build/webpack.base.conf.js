const path = require('path');
const fs = require('fs');
const srcHelper = require('./src-helper');

function getCssLoaders() {
  return {
    scss: [
      'vue-style-loader',
      {
        loader: 'css-loader',
        options: {
          minimize: false,
          sourceMap: true
        }
      },
      {
        loader: 'sass-loader',
        options: {
          sourceMap: true
        }
      }
    ]
  }
}

module.exports = {
  entry: srcHelper.getEntry(),
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: getCssLoaders()
        }
      }
    ]
  }
};