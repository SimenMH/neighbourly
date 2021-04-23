const Post = require('../models/post');
const measureDistance = require('../helpers/meterDistance');

async function createPost (ctx) {
  try {
    const post = ctx.request.body;
    ctx.body = await Post.create(post);
    ctx.status = 201;
  } catch (err) {
    console.log(err);
    ctx.status = 500;
  }
}

async function deletePost (ctx) {
  try {
    const { id } = ctx.params;
    await Post.findByIdAndRemove(id);
    ctx.status = 204 // 204 is for when a request was successfully processed, but is not returning anything
  } catch (err) {
    console.log(err);
    ctx.status = 500;
  }
}

module.exports = { getPosts, createPost, deletePost }