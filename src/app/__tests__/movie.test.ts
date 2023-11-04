import Movie from '../domain/Movie';

test('Тест создания класса Movie', () => {
  const obj = new Movie(
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
  expect(obj).toBeDefined();
  expect(obj).toBeInstanceOf(Movie);
  expect(obj).toHaveProperty('id', 12);
  expect(obj).toHaveProperty('name', 'Мстители');
  expect(obj).toHaveProperty('price', 500);
  expect(obj).toHaveProperty('originalName', 'The Avengers');
  expect(obj).toHaveProperty('format', 'IMAX');
  expect(obj).toHaveProperty('year', 2012);
  expect(obj).toHaveProperty('country', 'США');
  expect(obj).toHaveProperty('slogan', 'Avengers Assemble!');
  expect(obj).toHaveProperty('genre', ['фантастика', 'боевик', 'фэнтези', 'приключения']);
  expect(obj).toHaveProperty('duration', '137 мин. / 02:17');
});
