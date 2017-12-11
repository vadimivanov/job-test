const sortBooksByAuthor = (author, books) => {
    let sortedBooks = books.filter(book => book.author === author);

    return sortedBooks;
};

module.exports = sortBooksByAuthor;