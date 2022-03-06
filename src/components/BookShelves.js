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
    BooksAPI.update(book, newShelf).then(() => {
      this.setState((prevState) => {
        const newState = { ...prevState };
        delete newState.shelves[oldShelf][book.id];
        if (newShelf !== 'none') {
          newState.shelves[newShelf][book.id] = { ...book, shelf: newShelf };
        }
        return newState;
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
