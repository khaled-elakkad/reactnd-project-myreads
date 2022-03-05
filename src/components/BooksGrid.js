import React from 'react';
import Book from './Book';

function BooksGrid(props) {
  const { books, handleReshelf } = props;
  return (
    <ol className="books-grid">
      {Object.keys(books).map((bookId) => (
        <li key={bookId}>
          <Book handleReshelf={handleReshelf} {...books[bookId]} />
        </li>
      ))}
    </ol>
  );
}

export default BooksGrid;
