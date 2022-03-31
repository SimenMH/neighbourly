const Notice = require('../models/notice');

async function createNotice(ctx) {
  try {
    const notice = ctx.request.body;
    ctx.body = await Notice.create(notice);
    ctx.status = 201;
  } catch (err) {
    console.log(err);
    ctx.status = 500;
  }
}

async function upVoteNotice(ctx) {
  try {
    const { id } = ctx.params;
    const favor = await Notice.findOneAndUpdate(
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

async function deleteNotice(ctx) {
  try {
    const { id } = ctx.params;
    await Notice.findByIdAndRemove(id);
    ctx.status = 204; // 204 is for when a request was successfully processed, but is not returning anything
  } catch (err) {
    console.log(err);
    ctx.status = 500;
  }
}

module.exports = { createNotice, deleteNotice, upVoteNotice };
