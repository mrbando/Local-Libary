//return filter
//conditional is if authors id = id
//if so return that author

function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id)
  } 

function findBookById(books, id) {
  return books.find((book) => book.id === id)
}

// return 2 arrays (All books are logged)
// The first array has books that are currently checked out
// The second array has books that have been returned

function partitionBooksByBorrowedStatus(books) {
  return books.reduce((acc, book) => {
    const [borrowed, returned] = acc;
    const recent = book.borrows[0];
    if (recent.returned) {
      returned.push(book);
    } else {
      borrowed.push(book);
    }
    return acc;
  }, [[], []] );
}


// const accID = accounts.reduce((acc, account) => {
//   acc[account.id] = account;
//   return acc
// }, {} )
// return book.borrows.map(({id, returned}) => ({
//   ...accID[id], returned
// })).slice(0, 10)
// returns array of 10 or fewer accounts
//borrows should be returned

function getBorrowersForBook(book, accounts) {
  const foo = accounts.reduce((acc, account) => {
    acc[account.id] = account;
    return acc
  }, {} )
  return book.borrows.map(({id, returned}) => ({
    ...foo[id], returned
  })).splice(0, 10)
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
