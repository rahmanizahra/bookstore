import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
function NewBook({ books, setBooks, maxBooks,fetchData }) {
  // If the password is incorrect, the user is given two more chances to enter the correct password
  // If the password is incorrect three times, the user is redirected to the main menu
  // If the password is correct, the user is asked to enter the number of books they want to add

  const [passwordAttempts, setPasswordAttempts] = useState(3);
  const [numBooks, setNumBooks] = useState(0);

  const handlePasswordSubmit = () => {
    const enteredPassword = prompt("Enter the password:");
    if (enteredPassword === "pargol") {
      // Password is correct, proceed to enter the number of books
      const numBooksInput = prompt("Enter the number of books:");
      const numBooks = parseInt(numBooksInput, 10);
      if (
        isNaN(numBooks) ||
        numBooks < 1 ||
        numBooks > maxBooks ||
        books.length + numBooks > maxBooks
      ) {
        alert(
          `Invalid number of books. Please enter a number between 1 and ${maxBooks}.`
        );
        return;
      }
      setNumBooks(numBooks);
      setPasswordAttempts(3); // Reset password attempts
    } else {
      // Incorrect password, decrement the attempts
      setPasswordAttempts(passwordAttempts - 1);
      if (passwordAttempts === 1) {
        alert("Incorrect password. You have no more attempts. Access denied.");
        // You might want to redirect the user to another page or take appropriate action.
      } else {
        alert(
          `Incorrect password. ${passwordAttempts - 1} attempts remaining.`
        );
      }
    }
  };

  const handleBookInfoSubmit = async () => {
    /////////////////////////////////////////////////////////
    // HANDLE ADDING NEW BOOK FROM FRONTEND
    //const newBooks = [...books];
    //for (let i = 0; i < numBooks; i++) {
    //  const title = prompt(`Enter title for book ${i + 1}:`);
    //  const author = prompt(`Enter author for book ${i + 1}:`);
    //  const price = prompt(`Enter price for book ${i + 1}:`);
    //  const id = books.length + 1;
    //  newBooks.push({ title, author, price, id });
    //}
    //alert("Books added successfully");
    //setBooks(newBooks);
    ////////////////////////////////////////////////////////
    // HANDLE ADDING NEW BOOK FROM BACKEND
    const newBook = {};
    for (let i = 0; i < numBooks; i++) {
      const title = prompt(`Enter title for book ${i + 1}:`);
      const author = prompt(`Enter author for book ${i + 1}:`);
      const price = parseInt(prompt(`Enter price for book ${i + 1}:`));
      const id = books.length + 1;
      newBook.id = id;
      newBook.title = title;
      newBook.author = author;
      newBook.price = price;
    }
    try {
      // Send POST request to the backend
      const response = await axios.post(
        "http://localhost:3001/client/addBooks",
        {
          books: newBook,
        }
      );
      fetchData();
      // Handle success
      alert("Books added successfully");
    } catch (error) {
      // Handle errors
      console.error("Error adding books:", error.message);
    }
  };

  return (
    <div>
      <h1 style={{ color: "white", textAlign: "center" }}>Add New Book</h1>
      {passwordAttempts > 0 ? (
        <div style={{ textAlign: "center" }}>
          <button
            className="btn btn-primary btn-lg btn-block mb-2"
            onClick={handlePasswordSubmit}
          >
            Enter Password
          </button>
        </div>
      ) : (
        <div style={{ textAlign: "center" }}>
          {" "}
          <p style={{ color: "white" }}>
            Access denied. Please contact an administrator.
          </p>
        </div>
      )}
      <div style={{ textAlign: "center" }}>
        {numBooks > 0 && (
          <>
            <p style={{ color: "white" }}>Number of books to add: {numBooks}</p>
            <button
              className="btn btn-primary btn-lg btn-block mb-2"
              onClick={handleBookInfoSubmit}
            >
              Enter Book Information
            </button>
          </>
        )}
        <Link to="/main-menu">
          <button className="btn btn-primary btn-lg btn-block mb-2 mx-2">
            go to main menue
          </button>
        </Link>
      </div>
    </div>
  );
}

export default NewBook;
