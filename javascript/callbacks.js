const books = require('./books');
const Ratings = require('./ratings');

const print = result => console.log('Result:', result);

let filterBooksWithTitleStartingWithA = (sortedBooks) => {
    return new Promise((resolve, reject) => {
        let filteredBooks = sortedBooks;

        resolve(filteredBooks);
        reject('No match result');
    });
};

let sortBooksAlphabetically = (books) => {
    return new Promise((resolve, reject) => {
        let sortedBooks = Ratings.getTopAuthors(3);

        resolve(sortedBooks);
        reject('No match result');
    })
};

sortBooksAlphabetically(books)
    .then(sortedBooks => filterBooksWithTitleStartingWithA(sortedBooks))
    .then(filteredBooks => print(filteredBooks))
    .catch(error => console.log(error));