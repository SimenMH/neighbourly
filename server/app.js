'use strict';
const koa = require('koa');
const bodyParser = require('koa-bodyparser');
const router = require('./router');
const cors = require('@koa/cors');

const app = new koa();

app.use(cors());

app.use(bodyParser());
app.use(router.routes());


module.exports = app;
