import Buyable from '../src/buyable';

export default class Cart {
  private _items: Buyable[] = [];

  add(item: Buyable): void {
    this._items.push(item);
  }

  get items(): Buyable[] {
    return [...this._items];
  }

  getTotalCost(): number {
    return this._items.reduce((total, item) => total + item.price, 0);
  }

  getTotalCostWithDiscount(discount: number): number {
    return this._items.reduce((total, item) => {
      const discountedPrice = item.price - (item.discount || 0);
      return total + discountedPrice;
    }, 0) * (1 - discount / 100);
  }

  removeItemById(id: number): void {
    this._items = this._items.filter(item => item.id !== id);
  }
}