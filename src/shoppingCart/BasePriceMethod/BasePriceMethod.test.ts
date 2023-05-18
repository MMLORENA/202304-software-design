import BussinessBasePrice from './BasePriceMethod';

describe('Given a BasePriceMethod class', () => {
  describe('When it is method calculateBaseMethod is invoke with price 100', () => {
    const price = 100;

    test('Then it should return a number', () => {
      const basePriceMethod = new BussinessBasePrice(0);
      const numberResult = basePriceMethod.calculateBasePrice(price);

      expect(typeof numberResult).toBe('number');
    });

    test('Then it should return 90', () => {
      const expectedBasePrice = 90;
      const tax = 10;
      const buissnesBasePrice = new BussinessBasePrice(tax);

      const resultBasePrice = buissnesBasePrice.calculateBasePrice(price);

      expect(resultBasePrice).toBe(expectedBasePrice);
    });
  });
});
