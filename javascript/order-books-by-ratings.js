const sortBooksByRating = (books) => {
    let sortedBooks = books.sort(function (a, b) {
        return b.ratings - a.ratings;
    });
    return sortedBooks;
};

module.exports = sortBooksByRating;