const moment = require('moment');

const DEFAULT_DATE_TIME_PATTERN = 'yyyy-MM-DD HH:mm:ss';

const toUtcStr = (date, pattern = DEFAULT_DATE_TIME_PATTERN) =>
  moment.utc(date).format(pattern);

const utcTime = (date) => {
  const utcDate = moment.utc(date);
  const hourOfDay = utcDate.hour();
  const minuteOfHour = utcDate.minute();
  const secondOfMinute = utcDate.second();
  return {
    hourOfDay,
    minuteOfHour,
    secondOfMinute,
  };
};

const dateUtcStr = () => toUtcStr(new Date());

module.exports = { dateUtcStr, toUtcStr, utcTime };
