function findAccountById(accounts, id) {
  for(let i = 0; i<accounts.length; i++){
    if(accounts[i].id === id){
      return accounts[i]
    }
  }
}


const sortAccountsByLastName = (accounts) => accounts.sort((accountsA, accountsB) => 
  accountsA.name.last.toLowerCase() > accountsB.name.last.toLowerCase() ? 1:-1) 

function getTotalNumberOfBorrows(account, books) {
    const { id: accId } = account;
  
    return books.reduce((total, book) => {
      return (
        total +
        book.borrows
          .filter(borrow => borrow.id === accId)
          .reduce((totalBorrows, borrow) => totalBorrows + 1, 0)
      );
    }, 0);
  }
 
 

function getBooksPossessedByAccount(account, books, authors) {
 let result = [];
 let match = [];
 books.forEach((item) => {
  const borrowed = item.borrows;
  const book = {
   id: item.id,
   title: item.title,
   genre: item.genre,
   authorId: item.authorId,
   author: {},
   borrows: {}
  };
  const { id, title, genre, authorId, author, borrows } = book;

  borrowed.forEach((borrow) => {
   if (borrow.id === account.id && borrow.returned === false) {
    result.push(book);
    match.push(borrow);
    book.borrows = match;
    book.author = authors.filter((auth) => auth.id === book.authorId)[0];
   }
  });
 });
 return result;
}



module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
