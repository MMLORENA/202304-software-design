import type BasePriceMethod from '../BasePriceMethod/types';
import type Product from '../Product/Product';
import type ShoppingCartManager from './types';

class ShoppingCart implements ShoppingCartManager {
  #products: Product[];

  constructor(private readonly basePriceMethod: BasePriceMethod) {
    this.#products = [];
  }

  addProduct(product: Product): void {
    // O(1)
    this.#products.push(product);
  }

  get productsList(): Product[] {
    // O(1)
    return this.#products;
  }

  removeProduct(id: string): void {
    // O(n)
    this.#products = this.#products.filter(product => product.id !== id);
  }

  calculateBasePrice(price: number): number {
    // O(1)
    return this.basePriceMethod.calculateBasePrice(price);
  }

  calculateTotalPrice(): number {
    // O(n)
    return this.#products.reduce((accumulator: number, currentProduct) => {
      const productBasePrice = this.calculateBasePrice(
        currentProduct.basePrice,
      );
      const productWithTaxs = (productBasePrice * currentProduct.taxes) / 100;
      const productTotalPrice = productBasePrice + productWithTaxs;

      return accumulator + productTotalPrice;
    }, 0);
  }
}

export default ShoppingCart;
