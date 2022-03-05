import React from 'react';
import { bookShelves } from '../constants';

function BookShelfChanger(props) {
  const { currentShelf, book, handleReshelf } = props;

  const onShelfChange = (event) =>
    handleReshelf(currentShelf, event.target.value, book);

  return (
    <div className="book-shelf-changer">
      <select onChange={onShelfChange}>
        <option value="move" disabled>
          Move to...
        </option>
        {Object.keys(bookShelves).map((shelfName) => (
          <option
            key={shelfName}
            value={shelfName}
            disabled={currentShelf === shelfName}
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
