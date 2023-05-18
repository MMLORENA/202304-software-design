import type BasePriceMethod from '../BasePriceMethod/types';
import type Product from '../Product/Product';

interface ShoppingCartManager extends BasePriceMethod {
  addProduct(product: Product): void;
  get productsList(): Product[];
  removeProduct(id: string): void;
  calculateTotalPrice(): number;
}

export default ShoppingCartManager;
