import React, { useState } from "react";
import { Link } from "react-router-dom";
function UpdateBook({ books, setBooks,fetchData }) {
  const [passwordAttempts, setPasswordAttempts] = useState(3);
  const [passwordCorrect, setPasswordCorrect] = useState(false);
  // This function will be called when the user clicks on the "Enter Password" button
  const handlePasswordSubmit = () => {
    const enteredPassword = prompt("Enter the password:");
    if (enteredPassword === "pargol") {
      setPasswordCorrect(true);
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
  const handleUpdateBook = async () => {
    let bookId = prompt("Enter book id you want to update: ");
    let book = books.find((book) => book.id === Number(bookId));
    if (book) {
      let updatedAttribute = prompt(
        "Enter the attribute you want to update : "
      );
      //let newBooks = [...books];
      let newBooks = { ...book };
      switch (updatedAttribute) {
        case "title":
          let newTitle = prompt("Enter new title : ");
          //newBooks[bookId - 1] = {
          //  ...book,
          //  title: newTitle,
          //};
          newBooks = {
            ...book,
            title: newTitle,
          };
          break;
        case "author":
          let newAuthor = prompt("Enter new author : ");
          //newBooks[bookId - 1] = {
          //  ...book,
          //  author: newAuthor,
          //};
          newBooks = {
            ...book,
            author: newAuthor,
          };
          break;
        case "price":
          let newPrice = parseInt(prompt("Enter new price : "));
          //newBooks[bookId - 1] = {
          //  ...book,
          //  price: newPrice,
          //};
          newBooks = {
            ...book,
            price: newPrice,
          };
          break;
        default:
          break;
      }

      //setBooks(newBooks);
      try {
        const response = await fetch(
          "http://localhost:3001/client/updateBooks",
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ books: newBooks }),
          }
        );
        const data = await response.json();
        console.log(data);
        fetchData();
        //setBooks(data);
      } catch (error) {
        console.error("Error updating book:", error.message);
      }

      alert("Book updated successfully");
    } else {
      alert("Book not found!");
    }
  };

  return (
    <div>
      <h1 style={{ color: "white", textAlign: "center" }}>Update a book</h1>
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
      {passwordCorrect && (
        <div style={{ textAlign: "center" }}>
          <button
            className="btn btn-primary btn-lg btn-block mb-2"
            onClick={handleUpdateBook}
          >
            Update Book
          </button>
        </div>
      )}
      <div style={{ textAlign: "center" }}>
        {" "}
        <Link to="/main-menu">
          <button className="btn btn-primary btn-lg btn-block mb-2 mx-2">
            go to main menue
          </button>
        </Link>
      </div>
    </div>
  );
}

export default UpdateBook;
