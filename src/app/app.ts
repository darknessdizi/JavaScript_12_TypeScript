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
        1225
    )
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
        500
    )
);
console.log(cart.items);
