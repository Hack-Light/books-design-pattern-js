let bookstore = [
  { index: 1, title: "title", status: "available" },
  { index: 2, title: "title", status: "rented" },
  { index: 3, title: "title", status: "rented" },
  { index: 4, title: "title", status: "read" },
  { index: 5, title: "title", status: "available" },
  { index: 6, title: "title", status: "rented" },
  { index: 7, title: "title", status: "available" },
  { index: 8, title: "title", status: "available" },
  { index: 9, title: "title", status: "available" },
  { index: 10, title: "title", status: "available" },
  { index: 11, title: "title", status: "rented" }
];

let Book = function () {
  this.index = index;
  this.title = title;
  this.status = status;
};

Book.prototype.addBook = (index, title, status) => {
  let newbook = {
    index: bookstore.length + 1,
    title,
    status
  };
  bookstore.push(newbook);
  // console.log(bookstore);
};

Book.prototype.availBooks = () => {
  let available = bookstore.filter(function (books) {
    return books.status == "available";
  });
  console.log(available);
};

Book.prototype.lend = (id, title) => {
  let book = bookstore.find(book => book.index == id && book.title == title);
  if (book.status == "available") {
    book.status = "rented";
    console.log(
      `Book with title ${book.title} and id ${book.index} is been rented`
    );
  } else {
    console.log(`Book with title ${title} and id ${id} is not available`);
  }
};

Book.prototype.availBooks = () => {
  let available = bookstore.filter(books => {
    return books.status == "rented";
  });
  console.log(available);
};

Book.prototype.addBook(bookstore.length + 1, "Obi", "available");
Book.prototype.lend(12, "Obi");
