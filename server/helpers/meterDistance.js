// Compares two latitude and longitude coordinates and returns the distance in meters
// DO NOT CHANGE THIS
function distanceInMeters(pos1, pos2) {
  var p = 0.017453292519943295;
  var c = Math.cos;
  var a =
    0.5 -
    c((pos2.lat - pos1.lat) * p) / 2 +
    (c(pos1.lat * p) * c(pos2.lat * p) * (1 - c((pos2.lon - pos1.lon) * p))) / 2;

  const distance = Math.floor(12742 * Math.asin(Math.sqrt(a)) * 1000);
  return distance;
}

module.exports = { distanceInMeters };
