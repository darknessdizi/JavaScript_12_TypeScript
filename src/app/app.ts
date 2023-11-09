import Cart from './service/Cart';
import Book from './domain/Book';
import Movie from './domain/Movie';
import Smartpfone from './domain/smartphone';

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
    2000,
    1500,
  ),
);

console.log('2 элемента', cart.items);

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
console.log('3 элемента', cart.items);
console.log('Общая стоимость', cart.totalPriceWithoutDiscount());
console.log('Общая стоимость со скидкой 5%', cart.discountedPrice(5));
cart.delete(15);
console.log('2 элемента', cart.items);

const smartphone = new Smartpfone(5, 'Samsung', 1500);
cart.add(smartphone);
cart.add(smartphone);

console.log('2 элемента и 2 смартфона', cart.items);
console.log(`Колличество смартфонов: ${cart.items[2].count}`);

console.log('Общая стоимость', cart.totalPriceWithoutDiscount());
console.log('Общая стоимость со скидкой 5%', cart.discountedPrice(5));

cart.delete(5);
// cart.delete(5);

console.log('2 элемента и 1 смартфон', cart.items);

console.log('Общая стоимость', cart.totalPriceWithoutDiscount());
console.log('Общая стоимость со скидкой 5%', cart.discountedPrice(5));
