const express = require('express');

// server
const app = express();
app.use(express.static('dev'));
app.listen('8080', () => {
  console.log('请访问: localhost:8080');
});
