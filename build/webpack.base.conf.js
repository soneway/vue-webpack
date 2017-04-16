const path = require('path');
const fs = require('fs');

function getEntry(entryDir) {
  const files = fs.readdirSync(entryDir);
  return files.map((file) => path.join(entryDir, file))
  // 过滤出.js文件
    .filter((filePath) => {
      const stat = fs.statSync(filePath);
      return !stat.isDirectory() && filePath.endsWith('.js');
    })
    // 返回所有js文件entry信息: {name: path}对象
    .reduce((prev, filePath) => {
      const pathInfo = path.parse(filePath);
      prev[pathInfo.name] = filePath;
      return prev;
    }, {});
}

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
  entry: getEntry(path.join(__dirname, '../src/entries')),
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