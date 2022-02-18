




function findAccountById(accounts, id) {
  let accountIdFinder = accounts.find((account) => account.id === id);
  return accountIdFinder;
}

function sortAccountsByLastName(accounts) {
  let accountLastNameSorter = accounts.sort((lastNameA,lastNameB) =>
    lastNameA.name.last.toLowerCase() > lastNameB.name.last.toLowerCase() ? 1 : -1);
  return accountLastNameSorter;
}

// An account object.
// An array of all book objects.
// It returns a number that represents the number of times the account's ID appears in any book's borrows array.
// getTotalNumberOfBorrows(account, books); // 22
function getTotalNumberOfBorrows(account, books) {
  return books.reduce((acc, book) => {
    const count = book.borrows.reduce((accBorrow, borrow) => {
      return (borrow.id === account.id) ? accBorrow + 1 : accBorrow;
    }, 0);
    return acc + count;
  }, 0)
} 

function getBooksPossessedByAccount(account, books, authors) {
  return books.filter((book) => {
    const bookBorrowered = book.borrows[0]
      return !bookBorrowered.returned && bookBorrowered.id === account.id
  })
  .map((book) => {
    const author = authors.find((author) => author.id === book.authorId)
    return { ...book, author }
  });
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
