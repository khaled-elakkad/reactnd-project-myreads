import React from 'react';
import PropTypes from 'prop-types';
import BooksGrid from './BooksGrid';
import { bookShelves } from '../constants';

function Shelf(props) {
  const { name, books, handleReshelf } = props;
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{bookShelves[name].title}</h2>
      <div className="bookshelf-books">
        <BooksGrid books={books} handleReshelf={handleReshelf} />
      </div>
    </div>
  );
}

Shelf.propTypes = {
  name: PropTypes.string.isRequired,
  books: PropTypes.object.isRequired,
  handleReshelf: PropTypes.func.isRequired,
};

export default Shelf;
