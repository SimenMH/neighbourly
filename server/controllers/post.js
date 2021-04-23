const Notice = require('../models/notice');
const measureDistance = require('../helpers/meterDistance');

const maxDist = 250

async function getNotices (ctx) {
  try {
    let pos = ctx.params.pos.split(',');
    pos = { lat: parseFloat(pos[0]), lon: parseFloat(pos[1]) };
    const notices = await Notice.find();
    const filteredNotices = notices.filter(notice => {
      const distance = measureDistance.distanceInMeters(pos, { lat: notice.latitude, lon: notice.longitude });
      return distance <= maxDist;
    });
    ctx.body = filteredNotices.reverse();
    ctx.status = 200;
  } catch (err) {
    console.log(err);
    ctx.status = 500;
  }
}

async function createNotice (ctx) {
  try {
    const notice = ctx.request.body;
    ctx.body = await Notice.create(notice);
    ctx.status = 201;
  } catch (err) {
    console.log(err);
    ctx.status = 500;
  }
}

async function deleteNotice (ctx) {
  try {
    const { id } = ctx.params;
    await Notice.findByIdAndRemove(id)
    ctx.status = 204 // 204 is for when a request was successfully processed, but is not returning anything
  } catch (err) {
    console.log(err);
    ctx.status = 500;
  }
}

module.exports = { getNotices, createNotice, deleteNotice }