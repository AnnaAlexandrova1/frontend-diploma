function showTime(timestamp) {
  var d = new Date(timestamp);
  let timeStampCon = d.getHours() + ":" + d.getMinutes();

  return timeStampCon;
}

function showDuration(time) {
  let hours = Math.floor(time / 60 / 60);
  let min = (time / 60) % 60;
  let timeStamp = hours + ":" + min;

  return timeStamp;
}

function showDurationHours(time) {
  let hours = Math.floor(time / 60 / 60);
  return hours;
}

function showDurationMinutes(time) {
  let min = (time / 60) % 60;
  return min;
}

const showPrice = (arg) => {
  if (arg === undefined) {
    return;
  }
  return arg.bottom_price;
};

const showSeats = (arg) => {
  return arg > 0 ? arg : 0;
};

const drowVansList = (filterVansList) => {
  if (filterVansList.length === 0 || !filterVansList.length) {
    return;
  }
  let obj = {};
  for (let i = 0; i < filterVansList.length; i++) {
    i === 0 ? (obj[i] = true) : (obj[i] = false);
  }
  return obj;
};

export {
  showTime,
  showDuration,
  showDurationHours,
  showDurationMinutes,
  showPrice,
  showSeats,
  drowVansList
};


