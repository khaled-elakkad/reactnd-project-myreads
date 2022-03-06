import React from 'react';
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
        <option value="none">None</option>
      </select>
    </div>
  );
}

export default BookShelfChanger;
