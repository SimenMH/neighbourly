const mongoose = require('mongoose');

async function connectDB() {
  return mongoose.connect(
    'mongodb+srv://admin:816878@firstcluster.xfvzo.mongodb.net/test',
    {
      useFindAndModify: false,
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  );
}

module.exports = { connectDB };
