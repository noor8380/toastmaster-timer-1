const formatElapsed = elapsed => {
  const time = new Date(elapsed);
  const mins = padString(time.getUTCMinutes().toString(), 2, "0");
  const secs = padString(time.getUTCSeconds().toString(), 2, "0");
  const milli = padString(time.getUTCMilliseconds().toString(), 3, "0");
  return `${mins}:${secs}:${milli}`;
};

export const padString = (str, padTo, pad) =>
  pad.repeat(str.length >= padTo ? 0 : padTo - str.length) + str;

const formatTime = elapsed => {
  const time = new Date(elapsed);
  const mins = time.getUTCMinutes().toString();
  const secs = padString(time.getUTCSeconds().toString(), 2, "0");
  return `${mins}:${secs}`;
};

const getMinAndSec = elapsed => {
  const time = new Date(elapsed);
  const mins = padString(time.getUTCMinutes().toString(), 2, "0");
  const secs = padString(time.getUTCSeconds().toString(), 2, "0");
  return [mins, secs];
};

const getElapsedFromMinAndSec = (min, sec) => {
  const time = new Date(0);
  time.setUTCMinutes(min);
  time.setUTCSeconds(sec);
  return time.getTime();
};

export default {
  formatElapsed,
  formatTime,
  padString,
  getMinAndSec,
  getElapsedFromMinAndSec
};
