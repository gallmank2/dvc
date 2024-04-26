const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');
const port = 8000;

const indexRouter = require('./routes/index');

app.use('/',express.urlencoded({extended:false}));

app.use('/' ,express.static('public'));
app.set('views', path.join(__dirname, "views"));
app.set('view engine', 'pug');

app.use('/', indexRouter);

app.listen(port);
