const books = require('./books')

const filterBooksWithTitleStartingWithA = (sortedBooks, callback) => {
  let filteredBooks
  /* filter logic here */
  return callback(filteredBooks)
}

const sortBooksAlphabetically = (books, callback) => {
  let sortedBooks
  /* sorting logic books */
  return callback(sortedBooks)
}

const getBooksAsync = (callback) => {
  setTimeout(() => {
    callback(books, filterBooksWithTitleStartingWithA)
  }, 2000)
}

getBooksAsync(sortBooksAlphabetically)