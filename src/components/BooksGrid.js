import React from 'react';
import PropTypes from 'prop-types';
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

BooksGrid.propTypes = {
  books: PropTypes.object.isRequired,
  handleReshelf: PropTypes.func.isRequired,
};

export default BooksGrid;
