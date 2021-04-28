const { toUtc } = require('../index');

describe('index', () => {
  describe('toUtc', () => {
    test('morning', () => {
      const date = new Date(Date.parse('01 Jan 2020 00:00:00 GMT+11'));
      const result = toUtc(date);
      expect(result).toEqual('2019-12-31 13:00:00');
    });

    test('evening', () => {
      const date = new Date(Date.parse('01 Jan 2020 23:00:00 GMT+11'));
      const result = toUtc(date);
      expect(result).toEqual('2020-01-01 12:00:00');
    });
  });
});
