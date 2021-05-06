const mongoose = require('mongoose');

async function connectDB(name) {
  return mongoose.connect(`mongodb://127.0.0.1:27017/${name}`, {
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
}

module.exports = { connectDB };
