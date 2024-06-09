import React, { useState, useEffect } from "react";

function BookShelf() {
  const [shelf, setShelf] = useState([]);

  useEffect(() => {
    const savedBooks = JSON.parse(localStorage.getItem("bookshelf") || "[]");
    setShelf(savedBooks);
  }, []);

  const removeFromShelf = (bookKey) => {
    const updatedShelf = shelf.filter((book) => book.key !== bookKey);
    setShelf(updatedShelf);
    localStorage.setItem("bookshelf", JSON.stringify(updatedShelf));
  };

  return (
    <div>
      <div className="search">
        <span>My Bookshelf</span>
      </div>
      <div className="display">
        {shelf.length === 0 ? (
          <p>No books in your shelf.</p>
        ) : (
          shelf.map((book) => (
            <div key={book.key} className="book-card">
              <h3>{book.title}</h3>
              <p>{book.author_name?.join(", ")}</p>
              <img className="cover-image" src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}/>
              <button
                onClick={() => removeFromShelf(book.key)}
                className="b-card"
              >
                Remove from Shelf
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default BookShelf;
