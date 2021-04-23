const mongoose = require('mongoose');

const notice = new mongoose.Schema(
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
      requied: true
    }
  },
  { timestamps: true }
);

const Notice = mongoose.model('notice', notice)

module.exports = Notice;
