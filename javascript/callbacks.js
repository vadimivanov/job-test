const books = require('./books')

const print = result => console.log('Result:', result)

const filterBooksWithTitleStartingWithA = (sortedBooks, callback) => {
  let filteredBooks
  /* filter logic here */
  return callback(filteredBooks)
}

const sortBooksAlphabetically = (books, callback) => {
  let sortedBooks
  /* sorting logic books */
  return callback(sortedBooks, print)
}

const getBooksAsync = (callback) => {
  setTimeout(() => {
    callback(books, filterBooksWithTitleStartingWithA)
  }, 2000)
}

getBooksAsync(sortBooksAlphabetically)
