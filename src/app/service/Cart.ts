import Buyable from '../domain/Buyable';

// export default class Cart {
//     private items: Buyable[] = [];

//     add(item: Buyable): void {
//         this.items.push(item);
//     }

//     getAll(): Buyable[] {
//         return [...this.items];
//     }
// }

export default class Cart {
  private _items: Buyable[] = [];

  add(item: Buyable): void {
    this._items.push(item);
  }

  get items(): Buyable[] {
    return [...this._items];
  }

  totalPriceWithoutDiscount(): number {
    return this._items.reduce((sum, current) => sum + current.price, 0);
  }

  discountedPrice(discount: number): number {
    const summa: number = this.totalPriceWithoutDiscount();
    const result: number = summa - (summa / 100) * discount;
    return result;
  }

  delete(id: number): void {
    const index: number = this._items.findIndex((item) => item.id === id);
    this._items.splice(index, 1);
  }
}
