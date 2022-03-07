import React from 'react';
import PropTypes from 'prop-types';
import Shelf from './Shelf';

function BookShelves(props) {
  const { shelves, handleReshelf } = props;

  return (
    <div className="list-books-content">
      {Object.keys(shelves)
        .filter((shelfName) => shelfName !== 'none')
        .map((shelfName) => (
          <Shelf
            key={shelfName}
            name={shelfName}
            books={shelves[shelfName]}
            handleReshelf={handleReshelf}
          />
        ))}
    </div>
  );
}

BookShelves.propTypes = {
  shelves: PropTypes.object.isRequired,
  handleReshelf: PropTypes.func.isRequired,
};

export default BookShelves;
