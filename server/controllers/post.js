const Post = require('../models/post');

async function createPost(ctx) {
  try {
    const post = ctx.request.body;
    ctx.body = await Post.create(post);
    ctx.status = 201;
  } catch (err) {
    console.log(err);
    ctx.status = 500;
  }
}

async function upVotePost(ctx) {
  try {
    const { id } = ctx.params;
    const favor = await Post.findOneAndUpdate(
      { _id: id },
      { $inc: { vote: 1 } },
      { new: true }
    );

    ctx.body = favor;
    ctx.status = 201;
  } catch (err) {
    console.log(err);
    ctx.status = 500;
  }
}

async function deletePost(ctx) {
  try {
    const { id } = ctx.params;
    await Post.findByIdAndRemove(id);
    ctx.status = 204; // 204 is for when a request was successfully processed, but is not returning anything
  } catch (err) {
    console.log(err);
    ctx.status = 500;
  }
}

module.exports = { createPost, deletePost, upVotePost };
