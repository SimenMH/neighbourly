const Post = require('../models/post');
const Notice = require('../models/notice');
const measureDistance = require('../helpers/meterDistance');

const maxDist = 250

async function getAll (ctx) {
  try {
    let pos = ctx.params.pos.split(',');
    pos = { lat: parseFloat(pos[0]), lon: parseFloat(pos[1]) };
    
    const posts = await Post.find();
    const notices = await Notice.find();

    const filteredArr = [posts, notices].map(arr => {
      return arr.filter(notice => {
        const distance = measureDistance.distanceInMeters(pos, { lat: notice.latitude, lon: notice.longitude });
        return distance <= maxDist;
      }).reverse();
    });

    const allObj = { home: filteredArr[0], notice: filteredArr[1], event: [], favor: [] };

    ctx.body = allObj;
    ctx.status = 200;
  } catch (err) {
    console.log(err);
    ctx.status = 500;
  }
}

module.exports = { getAll }