import Book from '../domain/Book';

test('Тест создания класса Book', () => {
  const obj = new Book(
    1001,
    'War and Piece',
    'Leo Tolstoy',
    2000,
    1225,
  );
  expect(obj).toBeDefined();
  expect(obj).toBeInstanceOf(Book);
  expect(obj).toHaveProperty('id');
  expect(obj).toHaveProperty('name');
  expect(obj).toHaveProperty('author');
  expect(obj).toHaveProperty('price');
  expect(obj).toHaveProperty('pages');
});
