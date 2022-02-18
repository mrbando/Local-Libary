


function getTotalNumberOfBorrows(account, books) {
    let tempEmpty = [];
    let returner = [];
    tempEmpty.push(books.filter(book => book.borrow.id))
    for(let i=0;i<tempEmpty.length;i++){
      if(tempEmpty[i] = account.id){
        returner.push(tempEmpty[i])
      }
    }
    console.log(tempEmpty)
    console.log(returner)
    return returner.length
  } 