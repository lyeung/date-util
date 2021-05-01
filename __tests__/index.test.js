const { toUtcStr, utcTime } = require('../index');

describe('index', () => {
  describe('toUtcStr', () => {
    test('morning', () => {
      const date = new Date(Date.parse('01 Jan 2020 00:00:00 GMT+11'));
      const result = toUtcStr(date);
      expect(result).toEqual('2019-12-31 13:00:00');
    });

    test('evening', () => {
      const date = new Date(Date.parse('01 Jan 2020 23:00:00 GMT+11'));
      const result = toUtcStr(date);
      expect(result).toEqual('2020-01-01 12:00:00');
    });
  });

  describe('utcTime', () => {
    test('morning', () => {
      const date = new Date(Date.parse('01 Jan 2020 10:11:12 GMT+11'));
      const { hourOfDay, minuteOfHour, secondOfMinute } = utcTime(date);
      expect(hourOfDay).toEqual(23);
      expect(minuteOfHour).toEqual(11);
      expect(secondOfMinute).toEqual(12);
    });

    test('evening', () => {
      const date = new Date(Date.parse('01 Jan 2020 23:21:22 GMT+11'));
      const { hourOfDay, minuteOfHour, secondOfMinute } = utcTime(date);
      expect(hourOfDay).toEqual(12);
      expect(minuteOfHour).toEqual(21);
      expect(secondOfMinute).toEqual(22);
    });
  });
});
