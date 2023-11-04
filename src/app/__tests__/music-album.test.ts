import MusicAlbum from '../domain/MusicAlbum';

test('Тест создания класса MusicAlbum', () => {
  const obj = new MusicAlbum(
    12,
    'Гимн',
    'Михалков С.В.',
    1000,
    205,
  );
  expect(obj).toBeDefined();
  expect(obj).toBeInstanceOf(MusicAlbum);
  expect(obj).toHaveProperty('id', 12);
  expect(obj).toHaveProperty('name', 'Гимн');
  expect(obj).toHaveProperty('price', 1000);
  expect(obj).toHaveProperty('author', 'Михалков С.В.');
  expect(obj).toHaveProperty('durationInSeconds', 205);
});
