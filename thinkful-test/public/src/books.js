function findAuthorById(authors, id) {
  for(let i =0; i<authors.length; i++){
    if(authors[i].id === id){
      return authors[i]
    }
  }
}

function findBookById(books, id) {
  let foundBooks = books.find((book) => book.id ===id)
  return foundBooks
}

function partitionBooksByBorrowedStatus(books) {
  let booksReturned = books.filter((book) =>
    book.borrows.every((borrow) => borrow.returned === true)
 )
  let booksBorrowed = books.filter((book) => 
     book.borrows.some((borrow) => borrow.returned === false))
  let finalArr = [[...booksBorrowed], [...booksReturned]]
  return finalArr
}

function getBorrowersForBook(book, accounts) {
  return book.borrows
  .map((borrow) => {
    let account = accounts.find((account) => account.id === borrow.id)
    return{...borrow, ...account}
  })
  .slice(0,10)
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
