const express = require('express');
require('./Controller/connectDB');

var route = require('./Route')

const app = express();

app.use(route)

app.listen(4268, ()=> {
  console.log('App run on: http://localhost:4268');
});
