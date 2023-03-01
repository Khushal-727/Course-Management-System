const express = require('express');
require('./Controller/connectDB');
var bodyParser =  require('body-parser');
var route = require('./Route')

const app = express();

app.use(route)

app.use(bodyParser.json())

app.listen(4268, ()=> {
  console.log('App run on: http://localhost:4268');
});
