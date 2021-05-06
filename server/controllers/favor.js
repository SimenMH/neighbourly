const Favor = require('../models/favor');

async function createFavor(ctx) {
  try {
    const favor = ctx.request.body;
    ctx.body = await Favor.create(favor);
    ctx.status = 201;
  } catch (err) {
    console.log(err);
    ctx.status = 500;
  }
}

async function resolveFavor(ctx) {
  try {
    const { id } = ctx.params;
    const favor = await Favor.findById(id);

    favor.resolved = true;
    favor.save();

    ctx.body = favor;
    ctx.status = 201;
  } catch (err) {
    console.log(err);
    ctx.status = 500;
  }
}


async function upVoteFavor(ctx) {
  try {
    const { id } = ctx.params;
    const favor = await Favor.findOneAndUpdate(
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

async function deleteFavor(ctx) {
  try {
    const { id } = ctx.params;
    await Favor.findByIdAndRemove(id);
    ctx.status = 204; // 204 is for when a request was successfully processed, but is not returning anything
  } catch (err) {
    console.log(err);
    ctx.status = 500;
  }
}

module.exports = { createFavor, resolveFavor, deleteFavor, upVoteFavor };
