import React from 'react';
import BookShelfChanger from './BookShelfChanger';
import ImgNotFound from '../icons/image-not-found.svg';
import { slugify } from '../utils';

function Book(props) {
  const { title, authors, imageLinks, handleReshelf } = props;

  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${
              imageLinks ? imageLinks.thumbnail : ImgNotFound
            })`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        />
        <BookShelfChanger book={props} handleReshelf={handleReshelf} />
      </div>
      <div className="book-title">{title}</div>
      {authors &&
        authors.map((author) => (
          <div key={slugify(author)} className="book-authors">
            {author}
          </div>
        ))}
    </div>
  );
}

export default Book;
