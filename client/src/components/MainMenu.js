import React from "react";
import { Link } from "react-router-dom";

const MainMenu = ({ books }) => {
  return (
    <div
      className="container mt-5"
      style={{
        backgroundColor: "#F8F8F8",
        width: "600px",
        borderRadius: "5px",
        textAlign: "center",
        overflowY: "auto",
        marginBottom: "20px",
      }}
    >
      <h4 className="display-5 mb-4">Main Menu</h4>
      <p className="lead">What do you want to do?</p>

      <div className="mb-2">
        <Link to="/add-book">
          <button className="btn btn-primary btn-lg btn-block mb-2">
            Enter new books (password required)
          </button>
        </Link>
      </div>

      <div className="mb-2">
        <Link to="/update-book">
          <button className="btn btn-primary btn-lg btn-block mb-2">
            Change information of a book (password required)
          </button>
        </Link>
      </div>

      <div className="mb-2">
        <Link to="/display-book-author">
          <button className="btn btn-primary btn-lg btn-block mb-2">
            Display all books by a specific author
          </button>
        </Link>
      </div>

      <div className="mb-2">
        <Link to="/display-book-price">
          <button className="btn btn-primary btn-lg btn-block mb-2">
            Display all books under a certain price
          </button>
        </Link>
      </div>

      <div className="mb-2">
        <Link to="/quit">
          <button className="btn btn-danger btn-lg btn-block">Quit</button>
        </Link>
      </div>

      <h2 className="mt-4">Current Inventory</h2>

      <table className="table" style={{ marginRight: "20px" }}>
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Author</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>${book.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MainMenu;
