const books = require('./books');
const orderBooksByRatings = require('./order-books-by-ratings');
const fetchBooksByAuthors = require('./fetch-books-by-authors');

let sortedBooksByRating = orderBooksByRatings(books);
let sortBooksByAuthor = fetchBooksByAuthors('Brenda Jackson', books);

let Ratings = {
        getTopBooks: (index) => {
            let topBooks = sortedBooksByRating.slice(0, index);

            return topBooks;
        },

        getTopAuthors: (index) => {
            let topAuthorsRatings = [];
            let booksList = sortedBooksByRating.reduce((accBook, book) =>{
                if (book.author in accBook) {
                    accBook[book.author].push(book.ratings);
                } else {
                    accBook[book.author] = [book.ratings];
                }

                return accBook;
            }, {});

            for (let i in booksList) {
                let averageRating = booksList[i].reduce((a,b) =>  {
                    return a + b
                });
                topAuthorsRatings.push(averageRating/booksList[i].length);
            };

            let topAuthors = topAuthorsRatings.slice(0, index).sort((a,b) => b-a);

            return topAuthors;
        }
};

module.exports = Ratings;