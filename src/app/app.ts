import Cart from './service/Cart';
import Book from './domain/Book';
import Movie from './domain/Movie';

const cart = new Cart();
console.log(cart.items);

cart.add(
  new Book(
    1001,
    'War and Piece',
    'Leo Tolstoy',
    2000,
    1225,
  ),
);

cart.add(
  new Book(
    15,
    'Егерь Императрицы',
    'Андрей Булычев',
    2010,
    1500,
  ),
);

console.log(cart.items);

cart.add(
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
console.log(cart.items);
console.log('Общая стоимость', cart.totalPriceWithoutDiscount());
console.log('Общая стоимость со скидкой 5%', cart.discountedPrice(5));
cart.delete(15);
console.log(cart.items);
