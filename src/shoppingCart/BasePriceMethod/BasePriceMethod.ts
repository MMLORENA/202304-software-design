import type BasePriceMethod from './types';

class BussinessBasePrice implements BasePriceMethod {
  #discount: number;

  constructor(discount: number) {
    this.#discount = discount;
  }

  calculateBasePrice(price: number): number {
    // O(1)
    const priceWithDiscount = price * (this.#discount / 100);
    return price - priceWithDiscount;
  }
}

export default BussinessBasePrice;
