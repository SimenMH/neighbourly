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
    },
    allowMessages: {
      type: Boolean,
      required: false
    },
    resolved: Boolean
  },
  { timestamps: true }
);

const Favor = mongoose.model('favor', favor)

module.exports = Favor;