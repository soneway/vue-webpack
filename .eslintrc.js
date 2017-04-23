module.exports = {
  root: true,
  parser: 'babel-eslint',
  //airbnb|standard(eslint-config-standard)
  extends: 'airbnb',
  parserOptions: {
    // 使用es6模块
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true
  },

  plugins: [
    // lint .vue文件(eslint-plugin-html)
    'html'
  ],

  globals: {
    'Vue': true
  },

  rules: {
    'brace-style': 0,
    'comma-dangle': [2, 'never'],

    'no-plusplus': 0,
    'no-param-reassign': 0,
    'arrow-parens': 0,
    'import/newline-after-import': 0
  }
};
