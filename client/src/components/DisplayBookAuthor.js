import React,{useState} from 'react'
import { Link } from "react-router-dom";
function DisplayBookAuthor({books}) {
 // Display all books by a specific author
 const [booksByAuthor, setBooksByAuthor] = useState([]);

 const handleDisplayBookAuthor = () => {
        let author = prompt("Enter author name : ");
         let booksByAuthorResult = books.filter((book) => book.author === author);
         setBooksByAuthor(booksByAuthorResult);
        if (booksByAuthorResult.length > 0) {
          alert("Books found!");
        }
        else{
          alert("No books found!");
        }
      }
        
  return (
    <div style={{textAlign:"center"}}>
      <button className="btn btn-primary btn-lg btn-block mb-2 mx-2" onClick={handleDisplayBookAuthor}>Display Book by Author</button>
          {booksByAuthor.map((book) => (
          <li key={book.id} style={{color:"white"}}>
            {book.title} by {book.author} - ${book.price}
          </li>
        ))}
         <Link to="/main-menu">
        <button className="btn btn-primary btn-lg btn-block mb-2">go to main menue</button>
      </Link>
    </div>
  )
}

export default DisplayBookAuthor;