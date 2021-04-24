const mongoose = require('mongoose');

const event = new mongoose.Schema(
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
    eventDate: String,
    interest: Number
  },
  { timestamps: true }
);

const Event = mongoose.model('event', event)

module.exports = Event;