import BussinessBasePrice from '../BasePriceMethod/BasePriceMethod';
import Product from '../Product/Product';
import ProductTaxType from '../Product/types';
import ShoppingCart from './ShoppingCart';
import type ShoppingCartManager from './types';

describe('Given a ShoppingCart Class', () => {
  describe('When it is described', () => {
    test('Then it should be a function', () => {
      expect(typeof ShoppingCart).toBe('function');
    });
  });

  describe('When it is method addProduct is invoked with a Product with id:1', () => {
    test('Then it should return a products list with a Product id 1', () => {
      const mockBasePrise = new BussinessBasePrice(10);

      const productFreeTax = new Product(
        '1',
        '',
        '',
        0,
        ProductTaxType.freeTax,
      );
      const shoppingCart: ShoppingCartManager = new ShoppingCart(mockBasePrise);

      shoppingCart.addProduct(productFreeTax);

      expect(shoppingCart.productsList).toStrictEqual([productFreeTax]);
    });
  });

  describe('When products list have two products with id 1 & 2 and removeProduct is invoked with id: "1"', () => {
    test('Then products list should have just one product with id 2', () => {
      const mockBasePrise = new BussinessBasePrice(10);

      const productId = '1';
      const mockProduct = new Product(
        productId,
        '',
        '',
        0,
        ProductTaxType.freeTax,
      );
      const productIdTwo = '2';
      const mockProductTwo = new Product(
        productIdTwo,
        '',
        '',
        0,
        ProductTaxType.freeTax,
      );

      const shoppingCart = new ShoppingCart(mockBasePrise);
      shoppingCart.addProduct(mockProduct);
      shoppingCart.addProduct(mockProductTwo);

      shoppingCart.removeProduct(productId);

      expect(shoppingCart.productsList).toStrictEqual([mockProductTwo]);
    });
  });

  describe('When it is method calculateBasePrice is invoked with price 100 and discount 10%', () => {
    test('Then it should return the 90', () => {
      const mockBasePrice = new BussinessBasePrice(10);

      const shoppingCart = new ShoppingCart(mockBasePrice);
      const expectedBaseResult = 90;

      const basePriceResult = shoppingCart.calculateBasePrice(100);

      expect(basePriceResult).toBe(expectedBaseResult);
    });
  });

  describe('When it is method calculateTotalPrice is invoked with a product with price 100 & tax 0% and discount 10%', () => {
    test('Then it should return the shoppingCart total price of 99', () => {
      const expectedTotalPrice = 90;
      const mockBasePrice = new BussinessBasePrice(10);
      const shoppingCart = new ShoppingCart(mockBasePrice);
      shoppingCart.addProduct(
        new Product('', '', '', 100, ProductTaxType.freeTax),
      );

      const totalPrice = shoppingCart.calculateTotalPrice();

      expect(totalPrice).toBe(expectedTotalPrice);
    });
  });

  describe('When it is method calculateTotalPrice is invoke with products prices 200, 100 ', () => {
    describe('And product taxes 4% and 21% and without discount', () => {
      test('Then it should return a total price of 329', () => {
        const expectedTotalPrice = 329;
        const productReduceTax = new Product(
          '',
          '',
          '',
          200,
          ProductTaxType.reducedTax,
        );
        const productRegular = new Product(
          '',
          '',
          '',
          100,
          ProductTaxType.regularTax,
        );
        const shoppingCart = new ShoppingCart(new BussinessBasePrice(0));
        shoppingCart.addProduct(productRegular);
        shoppingCart.addProduct(productReduceTax);

        const resultTotalPrice = shoppingCart.calculateTotalPrice();

        expect(resultTotalPrice).toBe(expectedTotalPrice);
      });
    });

    describe('And product taxes 0% and 21% and discount of 15%', () => {
      test('Then it should return a total price of 272.85', () => {
        const expectedResultTotalPrice = 272.85;
        const productFreeTax = new Product(
          '',
          '',
          '',
          200,
          ProductTaxType.freeTax,
        );
        const productRegular = new Product(
          '',
          '',
          '',
          100,
          ProductTaxType.regularTax,
        );
        const mockBasePrice = new BussinessBasePrice(15);
        const shoppingCart = new ShoppingCart(mockBasePrice);
        shoppingCart.addProduct(productFreeTax);
        shoppingCart.addProduct(productRegular);

        const resultTotalPrice = shoppingCart.calculateTotalPrice();

        expect(resultTotalPrice).toBe(expectedResultTotalPrice);
      });
    });
  });
});
