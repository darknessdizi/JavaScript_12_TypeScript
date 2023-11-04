import Cart from '../service/Cart';
import Movie from '../domain/Movie';

test('Тест создания класса Cart', () => {
  const obj = new Cart();
  expect(obj).toBeDefined();
  expect(obj).toBeInstanceOf(Cart);
  obj.add(
    new Movie(
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
    ),
  );
  expect(obj.items).toBeInstanceOf(Array);
  expect(obj.items[0]).toBeInstanceOf(Movie);
});
