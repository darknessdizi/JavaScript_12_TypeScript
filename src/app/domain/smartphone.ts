import Buyable from './Buyable';

export default class Smartpfone implements Buyable {
  count: number;

  price: number;

  constructor(
    readonly id: number,
    readonly name: string,
    price: number,
  ) {
    this.count = 1;
    this.price = price;
  }
}
