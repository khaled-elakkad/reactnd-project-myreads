import React from 'react';
import BookShelfChanger from './BookShelfChanger';
import { slugify } from '../utils';

function Book(props) {
  const { title, authors, imageLinks, shelf, id, handleReshelf } = props;
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${imageLinks.thumbnail})`,
          }}
        />
        <BookShelfChanger
          currentShelf={shelf}
          book={props}
          handleReshelf={handleReshelf}
        />
      </div>
      <div className="book-title">{title}</div>
      {authors.map((author) => (
        <div key={slugify(author)} className="book-authors">
          {author}
        </div>
      ))}
    </div>
  );
}

export default Book;
