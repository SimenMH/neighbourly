const mongoose = require('mongoose');

const post = new mongoose.Schema(
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
    }
  },
  { timestamps: true }
);

const Post = mongoose.model('post', post);

module.exports = Post;
