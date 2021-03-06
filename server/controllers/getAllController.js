const Post = require('../models/post');
const Notice = require('../models/notice');
const Event = require('../models/event');
const Favor = require('../models/favor');
const measureDistance = require('../helpers/meterDistance');

const maxDist = 150;

async function getAll(ctx) {
  try {
    let pos = ctx.params.pos.split(',');
    pos = { lat: parseFloat(pos[0]), lon: parseFloat(pos[1]) };

    const posts = await Post.find();
    const notices = await Notice.find();
    const events = await Event.find();
    const favors = await Favor.find();

    const filteredArr = [posts, notices, events, favors].map(arr => {
      return arr
        .filter(notice => {
          // Filters out any post further than the max distance
          const distance = measureDistance.distanceInMeters(pos, {
            lat: notice.latitude,
            lon: notice.longitude
          });
          return distance <= maxDist;
        })
        .reverse();
    });

    const allObj = {
      home: filteredArr[0],
      notice: filteredArr[1],
      event: filteredArr[2],
      favor: filteredArr[3]
    };

    ctx.body = allObj;
    ctx.status = 200;
  } catch (err) {
    console.log(err);
    ctx.status = 500;
  }
}

module.exports = { getAll };
