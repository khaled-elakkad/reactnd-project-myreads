import React from 'react';
import PropTypes from 'prop-types';
import BookShelves from '../components/BookShelves';
import { Link } from 'react-router-dom';

function MyBooks(props) {
  const { shelves, handleReshelf } = props;
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <BookShelves shelves={shelves} handleReshelf={handleReshelf} />
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
}

MyBooks.propTypes = {
  shelves: PropTypes.object.isRequired,
  handleReshelf: PropTypes.func.isRequired,
};
export default MyBooks;
