const { partitionBooksByBorrowedStatus } = require("./books");

function counterHelper(input) {
  return input.length;
}

function getTotalBooksCount(books) {
  return counterHelper(books);
}

function getTotalAccountsCount(accounts) {
  return counterHelper(accounts);
}

function getBooksBorrowedCount(books) {
  //return partitionBooksByBorrowedStatus(books)[0].length;
    return books.filter((book) => {
    const [recent] = book.borrows
    return !recent.returned
  }).length
  }


//forEach() : take the name and depending on the name we ++ the totalCount

// HELPER
function _sortObjVals(obj) {
  const keys = Object.keys(obj);
  return keys.sort((keyOne, keyTwo) => {
    if(obj[keyOne] > obj[keyTwo]) { // -1, 0, 1
      return -1;
    } else if(obj[keyTwo] > obj[keyOne]) {
      return 1;
    } else {
      return 0;
    }
  })
}

// history: 1
// sports: 1
// tech: 1
// sports: 1
// tech: 1
// tech: 1

function getMostCommonGenres(books) {
  const count = books.reduce((acc, { genre }) => {
    if (acc[genre]) acc[genre] += 1;
    else acc[genre] = 1;
    return acc;
  }, {});
  //console.log("count: ", count)
  const sortedObj = _sortObjVals(count);
  //console.log("sortedObj: ", sortedObj)
  return sortedObj.map((name) => ({
    name, 
    count: count[name]
  })).slice(0, 5)
}

function getMostPopularBooks(books) {
  const result = books.map(book=>{
    const popularity = {
      name:book.title, 
      count:book.borrows.length
    }
    return popularity;
  });
  return result.sort((aRun, bRun) => bRun.count - aRun.count).slice(0, 5); 
}

function getMostPopularAuthors(books, authors) {
  let obj = {};
  const count = books.reduce((acc, { authorId, borrows }) => {
    if(acc[authorId]) acc[authorId].push(borrows.length);
    else acc[authorId] = [borrows.length];
    return acc;
  }, {});

  console.log("count: ", count)

  for(let id in count) {
    obj[id] = count[id].reduce((acc, curr) => acc + curr, 0);
    // const sum = count[id].reduce((acc, curr) => acc + curr);
    // console.log("sum line 100: ", sum)

    count[id] = obj[id];
    // console.log("sum line 103: ", sum)
  }

  const sortedCount = _sortObjVals(count);
  console.log("sortedCount: ", sortedCount)

  return sortedCount.map((authorId) => {
    console.log('authorId: ', typeof authorId)
    const {
      name: { first, last },
    } = authors.find(({ id }) => id === Number(authorId))
    const name = `${first} ${last}`;
    console.log('name: ', name)
    
    return { name, count: count[authorId]}
  })
  .slice(0, 5)
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};