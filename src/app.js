const express = require('express');
const path = require('path');
const compression = require('compression');
const controller = require('./controller');
const env = require('env2')('server.env');

const app = express();

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
