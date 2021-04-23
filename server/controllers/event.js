const Event = require('../models/event');

async function createEvent (ctx) {
  try {
    const event = ctx.request.body;
    ctx.body = await Event.create(event);
    ctx.status = 201;
  } catch (err) {
    console.log(err);
    ctx.status = 500;
  }
}

async function deleteEvent (ctx) {
  try {
    const { id } = ctx.params;
    await Event.findByIdAndRemove(id);
    ctx.status = 204 // 204 is for when a request was successfully processed, but is not returning anything
  } catch (err) {
    console.log(err);
    ctx.status = 500;
  }
}

module.exports = { createEvent, deleteEvent }