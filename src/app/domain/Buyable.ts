export default interface Buyable {
  readonly id: number,
  readonly name: string,
  price: number,
  count?: number
}
