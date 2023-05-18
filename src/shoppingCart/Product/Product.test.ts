import Product from './Product';
import ProductTaxType from './types';

describe('Given a Product Class', () => {
  describe('When it is defined', () => {
    test('Then it should be a function', () => {
      expect(typeof Product).toBe('function');
    });
  });

  describe('When it is instanciated with id: "1", name: "test", description: "test", basePrice: 0, taxes: 0%"', () => {
    test('Then it should return a product with id:"1", name: "test", description: "test", basePrice: 0, taxes: 0% "', () => {
      const product: Product = {
        id: '1',
        name: 'test',
        taxes: ProductTaxType.freeTax,
        basePrice: 0,
        description: 'test',
      };

      const resultProduct = new Product(
        product.id,
        product.name,
        product.description,
        product.basePrice,
        product.taxes,
      );

      expect(resultProduct).toBeInstanceOf(Product);
    });
  });
});
