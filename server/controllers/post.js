const Post = require('../models/post');

async function getPosts (ctx) {
  try {
    ctx.body = await Post.find()
    ctx.status = 200;
  } catch (err) {
    console.log(err);
    ctx.status = 500;
  }
}

async function createPost (ctx) {
  try {
    const { post } = ctx.request.body;
    ctx.body = await Post.create( post );
    ctx.status = 201;
  } catch (err) {
    console.log(err);
    ctx.status = 500;
  }
}

async function deletePost (ctx) {
  try {
    const { id } = ctx.params;
    await Post.findByIdAndRemove(id)
    ctx.status = 204 // 204 is for when a request was successfully processed, but is not returning anything
  } catch (err) {
    console.log(err);
    ctx.status = 500;
  }
}

module.exports = { getPosts, createPost, editPost, deletePost }