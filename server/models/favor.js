const mongoose = require('mongoose');

const favor = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true
    },
    longitude: {
      type: Number,
      required: true
    },
    latitude: {
      type: Number,
      required: true
    },
    color: {
      type: Number,
      required: true
    },
    identifier: {
      type: String,
      required: false
    }
  },
  { timestamps: true }
);

const Favor = mongoose.model('favor', favor)

module.exports = Favor;