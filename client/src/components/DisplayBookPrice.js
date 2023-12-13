import React, { useState } from "react";
import { Link } from "react-router-dom";
function DisplayBookPrice({ books }) {
  // Display all books under a certain price
  const [booksUnderPrice, setBooksUnderPrice] = useState([]);
  const handleDisplayBookPrice = () => {
    let price = prompt("Enter price : ");
    let booksUnderPriceResult = books.filter((book) => book.price < price);
    console.log(booksUnderPriceResult); // for debugging
    setBooksUnderPrice(booksUnderPriceResult);
    if (booksUnderPriceResult.length > 0) {
      alert("Books found!");
    }
    if (booksUnderPriceResult.length === 0) {
      alert("No books found!");
    }
  };
  return (
    <div style={{ textAlign: "center" }}>
      <button
        className="btn btn-primary btn-lg btn-block mb-2 mx-2"
        onClick={handleDisplayBookPrice}
      >
        Display Book by Price
      </button>
      {booksUnderPrice.map((book) => (
        <li key={book.id} style={{color:"white"}}>
          {book.title} by {book.author} - ${book.price}
        </li>
      ))}
      <Link to="/main-menu">
        <button className="btn btn-primary btn-lg btn-block mb-2 mx-2">
          go to main menue
        </button>
      </Link>
    </div>
  );
}

export default DisplayBookPrice;
