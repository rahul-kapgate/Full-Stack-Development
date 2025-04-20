// Activity 1: Object Creation and Access
// Task 1: Create an object representing a book with properties like title, author, and year, and log the object to the console.

Book = {
  title: "Book 1",
  author: "RK",
  year: 1998,

  getBookInfo() {
    console.log(this.author, this.title);
  },

  updateYear(year) {
    this.year = year;
  },
};

console.log(Book);

// Task 2: Access and log the title and author properties of the book object.

console.log(Book.title, Book.author);

// Activity 2: Object Methods
// Task 3: Add a method to the book object that returns a string with the book’s title and author, and log the result of calling this method.

Book.getBookInfo();

// Task 4: Add a method to the book object that takes a parameter (year) and updates the book’s year property, then log the updated object.

console.log(Book.year);
Book.updateYear(2002);
console.log(Book.year);

// Activity 3: Nested Objects
// Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.

const Library = {
  name: "City Central Library",
  books: [
    {
      title: "The Alchemist",
      author: "Paulo Coelho",
      year: 1988,
    },
    {
      title: "Atomic Habits",
      author: "James Clear",
      year: 2018,
    },
    {
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      year: 1937,
    },
  ],
};

// Log the entire library object
console.log(Library);


console.log(Library)

// Task 6: Access and log the name of the library and the titles of all the books in the library.

console.log(Library.name)

console.log("Book Titles:");
Library.books.forEach((book) => {
  console.log(book.title);
});

// Activity 4: The this Keyword
// Task 7: Add a method to the book object that uses the this keyword to return a string with the book’s title and year, and log the result of calling this method.

Book.getBookInfo()

// Activity 5: Object Iteration
// Task 8: Use a for...in loop to iterate over the properties of the book object and log each property and its value.

console.log('\n')

for(let key in Book){
    console.log(Book[key])
}

// Task 9: Use Object.keys and Object.values methods to log all the keys and values of the book object

console.log("\n");

console.log("Keys:", Object.keys(Book));

console.log("Values:", Object.values(Book));
