import Cart from '../service/Cart';
import Movie from '../domain/Movie';

const movie1 = new Movie(
  12,
  'Мстители',
  'The Avengers',
  'IMAX',
  2012,
  'США',
  'Avengers Assemble!',
  ['фантастика', 'боевик', 'фэнтези', 'приключения'],
  '137 мин. / 02:17',
  500,
);

const movie2 = new Movie(
  15,
  'Истребители',
  'The Fighters',
  'IMAX',
  2015,
  'RUS',
  'The fighters will win!',
  ['фантастика', 'боевик', 'фэнтези', 'приключения'],
  '120 мин. / 02:00',
  2500,
);

test('Тест создания класса Cart', () => {
  const obj = new Cart();
  expect(obj).toBeDefined();
  expect(obj).toBeInstanceOf(Cart);
  obj.add(movie1);
  expect(obj.items).toBeInstanceOf(Array);
  expect(obj.items[0]).toBeInstanceOf(Movie);
  obj.add(movie2);
  expect(obj.items).toHaveLength(2);
  expect(obj.totalPriceWithoutDiscount()).toBe(3000);
  expect(obj.discountedPrice(5)).toBe(2850);
  obj.delete(15);
  expect(obj.items).toHaveLength(1);
});
