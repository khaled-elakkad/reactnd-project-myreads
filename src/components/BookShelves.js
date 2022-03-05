import React, { Component } from 'react';
import Shelf from './Shelf';
import * as BooksAPI from '../BooksAPI';
import { groupBooksByShelves } from '../utils';

class BookShelves extends Component {
  state = {
    shelves: {},
  };

  componentDidMount() {
    BooksAPI.getAll().then((books) =>
      this.setState({ shelves: groupBooksByShelves(books) })
    );
  }

  handleReshelf = (oldShelf, newShelf, book) => {
    console.log({ oldShelf, newShelf, book });
    BooksAPI.update(book, newShelf).then(() => {
      this.setState((prevState) => {
        console.log('before', prevState);
        const newState = { ...prevState };
        delete newState.shelves[oldShelf][book.id];
        console.log('after', newState);
        // newState.shelves[newShelf][book.id] = book;
        // console.log('after', newState);
        return prevState;
      });
    });
  };

  render() {
    const { shelves } = this.state;
    return (
      <div className="list-books-content">
        {Object.keys(shelves).map((shelfName) => (
          <Shelf
            key={shelfName}
            name={shelfName}
            books={shelves[shelfName]}
            handleReshelf={this.handleReshelf}
          />
        ))}
      </div>
    );
  }
}

export default BookShelves;
