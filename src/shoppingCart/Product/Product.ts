import type ProductTaxType from './types';

class Product {
  // eslint-disable-next-line max-params
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly description: string,
    public readonly basePrice: number,
    public readonly taxes: ProductTaxType,
  ) {}
}

export default Product;
