import React from 'react';
import BookShelves from '../components/BookShelves';
import { Link } from 'react-router-dom';

export default function MyBooks(props) {
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
