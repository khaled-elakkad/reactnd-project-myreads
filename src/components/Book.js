import React from 'react';
import PropTypes from 'prop-types';
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

Book.propTypes = {
  handleReshelf: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  shelf: PropTypes.string,
  authors: PropTypes.array,
  allowAnonLogging: PropTypes.bool,
  averageRating: PropTypes.number,
  canonicalVolumeLink: PropTypes.string,
  categories: PropTypes.array,
  contentVersion: PropTypes.string,
  description: PropTypes.string,
  imageLinks: PropTypes.object,
  industryIdentifiers: PropTypes.array,
  infoLink: PropTypes.string,
  language: PropTypes.string,
  maturityRating: PropTypes.string,
  pageCount: PropTypes.number,
  panelizationSummary: PropTypes.object,
  previewLink: PropTypes.string,
  printType: PropTypes.string,
  publishedDate: PropTypes.string,
  publisher: PropTypes.string,
  ratingsCount: PropTypes.number,
  readingModes: PropTypes.object,
};

export default Book;
