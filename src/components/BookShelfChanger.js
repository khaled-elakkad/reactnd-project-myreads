import React from 'react';
import PropTypes from 'prop-types';
import { bookShelves } from '../constants';

function BookShelfChanger(props) {
  const { book, handleReshelf } = props;

  const onShelfChange = (event) => {
    handleReshelf(book.shelf, event.target.value, book);
  };

  return (
    <div className="book-shelf-changer">
      <select onChange={onShelfChange} value={book.shelf || 'none'}>
        <option value="move" disabled>
          Move to...
        </option>
        {Object.keys(bookShelves).map((shelfName) => (
          <option
            key={shelfName}
            value={shelfName}
            disabled={book.shelf === shelfName}
          >
            {bookShelves[shelfName].title}
          </option>
        ))}
      </select>
    </div>
  );
}

BookShelfChanger.propTypes = {
  handleReshelf: PropTypes.func.isRequired,
  book: PropTypes.object.isRequired,
};

export default BookShelfChanger;
