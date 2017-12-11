const books = require('./books')
const sortBooksByRating = require('./order-books-by-ratings')

const print = result => console.log('Result:', result)

let filterBooksWithTitleStartingWithA = (sortedBooks) => {
    return new Promise((resolve, reject) => {
        let filteredBooks = sortedBooks;

        resolve(filteredBooks);
        reject('No match result');
    });
};

let sortBooksAlphabetically = (books) => {
    return new Promise((resolve, reject) => {
        let sortedBooks = sortBooksByRating(books);

        resolve(sortedBooks);
        reject('No match result');
    })
};

setTimeout(() => {
    sortBooksAlphabetically(books)
        .then(sortedBooks => filterBooksWithTitleStartingWithA(sortedBooks))
        .then(filteredBooks => print(filteredBooks))
        .catch(error => console.log(error))
}, 2000);