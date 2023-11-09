import Cart from '../service/Cart';
import Movie from '../domain/Movie';
import Smartpfone from '../domain/smartphone';

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

const smartphone = new Smartpfone(5, 'Samsung', 1500);

test('Тест добавления и удаления класса Smartpfone', () => {
  const obj = new Cart();
  obj.add(smartphone);
  expect(obj.items).toHaveLength(1);
  expect(obj.items[0]).toBeInstanceOf(Smartpfone);
  expect(obj.items[0].count).toBe(1);
  obj.add(smartphone);
  expect(obj.items).toHaveLength(1);
  expect(obj.items[0].count).toBe(2);
  obj.delete(5);
  expect(obj.items).toHaveLength(1);
  expect(obj.items[0].count).toBe(1);
  obj.delete(5);
  expect(obj.items).toHaveLength(0);
});
