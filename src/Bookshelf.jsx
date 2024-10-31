import { useState } from 'react';
import './App.css';
import Bookshelf from './Bookshelf.jsx';

  function BookShelf() {
   const [books, setBooks] = useState([
    { title: 'Fourth Wing', author: 'Rebecca Yarros' },
    { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
  ]); 
  
    // State to hold the current form input for a new book
    const [newBook, setNewBook] = useState({
      title: '',
      author: ''
    });
  
    // // Event handler for input change
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      // Update the newBook state while preserving other fields
      setNewBook({...newBook,[event.target.name]: event.target.value})
    };
  
    // // Event handler for form submission
    const handleSubmit = (event) => {
      event.preventDefault();
      // Add the new book to the books array
      setBooks([...books, newBook]); //This line is the equivalant of books.push(newBook)
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