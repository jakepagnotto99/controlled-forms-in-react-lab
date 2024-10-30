import { useState } from 'react';
<div className="bookshelfDiv">
  <div className="formDiv">
    <h3>Add a Book</h3>
    {/* Form will go here */}
  </div>
  <div className="bookCardsDiv">{/* Book cards will display here */}</div>
</div>
import './App.css';
import Bookshelf from './Bookshelf.jsx';

const App = () => {
  return (
    <>
      <h1>My Bookshelf</h1>
      <Bookshelf />
    </>
  );
};
const [books, setBooks] = useState([
    { title: 'Fourth Wing', author: 'Rebecca Yarros' },
    { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
  ]);
  function BookShelf() {
    // State to hold the list of books
    const [books, setBooks] = useState([]);
  
    // State to hold the current form input for a new book
    const [newBook, setNewBook] = useState({
      title: '',
      author: ''
    });
  
    // Event handler for input change
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      // Update the newBook state while preserving other fields
      setNewBook((prevBook) => ({
        ...prevBook,
        [name]: value
      }));
    };
  
    // Event handler for form submission
    const handleSubmit = (event) => {
      event.preventDefault();
      // Add the new book to the books array
      setBooks((prevBooks) => [...prevBooks, newBook]);
      // Reset the newBook state to clear the form
      setNewBook({
        title: '',
        author: ''
      });
    };
  
    return (
      <div className="book-shelf">
        <h1>Book Shelf</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={newBook.title}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="author">Author:</label>
            <input
              type="text"
              id="author"
              name="author"
              value={newBook.author}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit">Add Book</button>
        </form>
  
        <div className="book-list">
          <h2>Books Added</h2>
          {books.length > 0 ? (
            books.map((book, index) => (
              <div key={index} className="book-card">
                <h3>{book.title}</h3>
                <p>by {book.author}</p>
              </div>
            ))
          ) : (
            <p>No books added yet.</p>
          )}
        </div>
      </div>
    );
  }
  
  export default BookShelf;