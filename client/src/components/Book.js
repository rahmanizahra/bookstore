// DEFINING A CLASS
class Book {
 static numberOfCreatedBooks = 0;

 constructor(title, author, ISBN, price) {
  this.title = title;
  this.author = author;
  this.ISBN = ISBN;
  this.price = price;
  Book.numberOfCreatedBooks++;
 }
//  STATIC METHODS
 findNumberOfCreatedBooks() {
  return Book.numberOfCreatedBooks;
 }

 equals(otherBook) {
  return this.ISBN === otherBook.ISBN && this.price === otherBook.price;
 }

 displayInfo() {
  console.log(`Title: ${this.title}`);
  console.log(`Author: ${this.author}`);
  console.log(`ISBN: ${this.ISBN}`);
  console.log(`Price: ${this.price}`);
 }
}

// Example usage:
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", "9780743273565", 10.99);
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", "9780061120084", 12.99);

console.log(book1.findNumberOfCreatedBooks()); // Output: 2

console.log(book1.equals(book2)); // Output: false

book1.displayInfo();
// Output:
// Title: The Great Gatsby
// Author: F. Scott Fitzgerald
// ISBN: 9780743273565
// Price: 10.99