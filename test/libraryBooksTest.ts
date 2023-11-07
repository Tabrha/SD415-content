// /* comment out the import assert line (in /dist/test js mocha file) when running in the browser */
// import { assert } from "chai"

// import {Book, library, findTitles, findAuthors , findIDs, createBook} from "../src/book.js";  //import all of the app.js functions used in the Mocha tests


// /*
// Write a JavaScript program that will accept title, author, and libraryID values from an HTML page and create new book objects for each entry.  
// •	Before creating the webpage first write and test the following JavaScript functions:
// o	createBook, which will take title, author, and libraryID as inputs.  It will create and return a new book object 
// o	findTitles, which will find all the book titles in libraryBooks and return them in an alphabetically ordered array.
// o	findAuthors, which will find all the authors in libraryBooks and return them in an alphabetically ordered array.
// o	findIDs, which will find all the libraryIDs in libraryBooks and return them in an alphabetically ordered array.

// */

// describe("library", function () {

//     // This should be used as the "library database" for testing--included in app.js
//     let library: Book[] = [
//         { title: "The Road Ahead", author: "Bill Gates", libraryID: 1254 },
//         { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4264 },
//         { title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", libraryID: 3245 }
//     ];

//     const titles = ["Mockingjay: The Final Book of The Hunger Games", "The Road Ahead", "Walter Isaacson"];
//     const authors = ["Bill Gates", "Steve Jobs", "Suzanne Collins"];
//     const ids = [1254, 3245, 4264];


//     it("find titles", function () {
//         assert.deepEqual(findTitles(), titles);
//     });

//     it("find authors", function () {
//         assert.deepEqual(findAuthors(), authors);
//     });

//     it("find ids", function () {
//         assert.deepEqual(findIDs(), ids);
//     });

//     it("create book", function () {
//         const newBook = {title: "My New Book", author: "Me Too", libraryID: 1144};
//         assert.deepEqual(createBook("My New Book",  "Me Too",  1144), newBook);
//     });

//     it("create book and save to library", function () {
//         //assumes createBook was called before this test--e.g., in prior it test
//         const TEST_LIB: Book[] = [
//             { title: "The Road Ahead", author: "Bill Gates", libraryID: 1254 },
//             { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4264 },
//             { title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", libraryID: 3245 },
//             { title: "My New Book", author: "Me Too", libraryID: 1144 }
//         ];
//         assert.deepEqual(library, TEST_LIB);

//     });

// });

/**************************************************** */




// import { assert } from "chai";
// import { Book, library, findTitles, findAuthors, findIDs, createBook } from "../src/book";

// describe("Library Functions", function () {
//   // Reset the library before each test
//   beforeEach(function () {
//     library = [
//       { title: "The Road Ahead", author: "Bill Gates", libraryID: 1254 },
//       { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4264 },
//       { title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", libraryID: 3245 },
//     ];
//   });

//   it("findTitles should return book titles in alphabetical order", function () {
//     const expectedTitles = ["Mockingjay: The Final Book of The Hunger Games", "The Road Ahead", "Walter Isaacson"];
//     assert.deepEqual(findTitles(), expectedTitles);
//   });

//   it("findAuthors should return authors in alphabetical order", function () {
//     const expectedAuthors = ["Bill Gates", "Steve Jobs", "Suzanne Collins"];
//     assert.deepEqual(findAuthors(), expectedAuthors);
//   });

//   it("findIDs should return libraryIDs in order", function () {
//     const expectedIDs = [1254, 3245, 4264];
//     assert.deepEqual(findIDs(), expectedIDs);
//   });

//   it("createBook should create and return a new book object", function () {
//     const newBook = { title: "My New Book", author: "Me Too", libraryID: 1144 };
//     assert.deepEqual(createBook("My New Book", "Me Too", 1144), newBook);
//   });

//   it("createBook should add the new book to the library", function () {
//     const newBook = createBook("My New Book", "Me Too", 1144);
//     const expectedLibrary = [
//       { title: "The Road Ahead", author: "Bill Gates", libraryID: 1254 },
//       { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4264 },
//       { title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", libraryID: 3245 },
//       newBook,
//     ];
//     assert.deepEqual(library, expectedLibrary);
//   });
// });

/***************************************/ 

import { assert } from "chai";

// Import the functions to be tested
import { createBook, findTitles, findAuthors, findIDs } from "./your-code-file"; // Replace with the actual file path

describe("Library Functions", function () {
  // Reset the libraryBooks before each test
  let libraryBooks: Book[] = [];

  beforeEach(function () {
    libraryBooks = [];
  });

  it("createBook should create and return a new book object", function () {
    const newBook = createBook("Title 1", "Author 1", 123);
    assert.deepEqual(newBook, { title: "Title 1", author: "Author 1", libraryID: 123 });
  });

  it("createBook should add the new book to the libraryBooks array", function () {
    createBook("Title 1", "Author 1", 123);
    assert.deepEqual(libraryBooks, [{ title: "Title 1", author: "Author 1", libraryID: 123 }]);
  });

  it("findTitles should return book titles in alphabetical order", function () {
    libraryBooks.push({ title: "Title C", author: "Author C", libraryID: 3 });
    libraryBooks.push({ title: "Title A", author: "Author A", libraryID: 1 });
    libraryBooks.push({ title: "Title B", author: "Author B", libraryID: 2 });

    const expectedTitles = ["Title A", "Title B", "Title C"];
    assert.deepEqual(findTitles(), expectedTitles);
  });

  it("findAuthors should return authors in alphabetical order", function () {
    libraryBooks.push({ title: "Title 1", author: "Author C", libraryID: 3 });
    libraryBooks.push({ title: "Title 2", author: "Author A", libraryID: 1 });
    libraryBooks.push({ title: "Title 3", author: "Author B", libraryID: 2 });

    const expectedAuthors = ["Author A", "Author B", "Author C"];
    assert.deepEqual(findAuthors(), expectedAuthors);
  });

  it("findIDs should return libraryIDs in order", function () {
    libraryBooks.push({ title: "Title 1", author: "Author 1", libraryID: 3 });
    libraryBooks.push({ title: "Title 2", author: "Author 2", libraryID: 1 });
    libraryBooks.push({ title: "Title 3", author: "Author 3", libraryID: 2 });

    const expectedIDs = [1, 2, 3];
    assert.deepEqual(findIDs(), expectedIDs);
  });
});
