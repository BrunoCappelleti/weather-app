import moment from 'moment';

const getDay = (timeCode) => {
  const unix = moment.utc('1970-01-01T00:00:00').add(timeCode, 'seconds').format()
  const day = moment(unix).format('dddd');

  return day;
}

const getTime = (timeCode) => {
  const offset = moment.utc('1970-01-01T00:00:00').add(timeCode, 'seconds').format();
  const time = moment(offset).format('h:mm a');

  return time;
}

export {
  getDay,
  getTime
}
