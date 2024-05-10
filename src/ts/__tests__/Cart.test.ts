import Cart from '../service/Cart';
import Book from '../domain/Book';
import MusicAlbum from '../domain/MusicAlbum';
import Movie from '../domain/Movie';

const cart = new Cart();

test('new card should be empty', () => {
    expect(cart.items.length).toBe(0);
});

test('Успешно добовляет Book, MusicALbum, Movie', () => {
    
    cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
    cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
    cart.add(new Movie(1002, 'Мстители', 'IMAX', 'The Avengers', 2012, 'США', 'Avengers Assemble!', ['фантастика', 'боевик', 'фэнтези', 'приключения'], '137 мин. / 02:17', 1100));
  
    expect(cart.items.length).toBe(3);
});

test('Должна считать сумарную стоимоть добавленных объектов', () => {
    expect(cart.totalCost()).toBe(4000);
});

test('Должна считать сумарную стоимоть добавленных объектов с дисконтом', () => {
    expect(cart.totalCostDiscount(50)).toBe(2000);
});

test('Должна позволять удалять уже добавленный в корзину объект', () => {
    cart.deleteObject(1001);
    cart.deleteObject(1002);
    expect(cart.items).toEqual(cart.items);
});