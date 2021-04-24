'use strict';
const koa = require('koa');
const bodyParser = require('koa-bodyparser');
const router = require('./router');
const cors = require('@koa/cors');
const db = require('./models/index.js');

const app = new koa();

const PORT = 3001;

app.use(cors());

app.use(bodyParser());
app.use(router.routes());

db.connectDB().then(console.log('Connected to Mongoose'));
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/ 🚀`);
});
