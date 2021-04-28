const moment = require('moment');

const DEFAULT_DATE_TIME_PATTERN = 'yyyy-MM-DD HH:mm:ss';

const toUtc = (date, pattern = DEFAULT_DATE_TIME_PATTERN) => {
  return moment.utc(date).format(pattern);
};

const dateUtc = () => toUtc(new Date());

module.exports = { dateUtc, toUtc };
