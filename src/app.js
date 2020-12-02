const express = require('express');
const path = require('path');
const compression = require('compression');
require('env2')('server.env');
const controller = require('./controller');
const favicon = require('serve-favicon');

const app = express();
app.use(favicon(path.join(__dirname, '..', 'public', 'images', 'favicon.ico')));
app.disable('x-powered-by');
app.set('port', process.env.PORT || 4000);

app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  express.static(path.join(__dirname, '..', 'public'), { maxAge: '30d' }),
);

app.use(controller);

module.exports = app;
