const moment = require('moment');

const DEFAULT_DATE_TIME_PATTERN = 'yyyy-MM-DD HH:mm:ss';

const toUtc = (date) => moment.utc(date);

const toUtcStr = (date, pattern = DEFAULT_DATE_TIME_PATTERN) =>
  toUtc(date).format(pattern);

const utcTime = (date) => {
  const utcDate = toUtc(date);
  const hourOfDay = utcDate.hour();
  const minuteOfHour = utcDate.minute();
  const secondOfMinute = utcDate.second();
  return {
    hourOfDay,
    minuteOfHour,
    secondOfMinute,
  };
};

const dateUtcStr = (formatPattern) => toUtcStr(new Date(), formatPattern);

module.exports = { dateUtcStr, toUtcStr, utcTime };
