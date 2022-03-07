import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchInput from '../components/SearchInput';
import BooksGrid from '../components/BooksGrid';
import * as BooksAPI from '../BooksAPI';
import { replaceWithShelvedBooks } from '../helpers';

class AllBooks extends Component {
  static propTypes = {
    shelves: PropTypes.object.isRequired,
    handleReshelf: PropTypes.func.isRequired,
  };

  state = { searchTxt: '', books: {} };

  handleSearchChange = (event) => {
    const { shelves } = this.props;
    const { value } = event.target;
    this.setState({ searchTxt: value });
    value &&
      BooksAPI.search(value).then(
        (resultBooks) =>
          resultBooks.length &&
          this.setState({
            books: replaceWithShelvedBooks(resultBooks, shelves),
          })
      );
  };

  handleSearchReshelf = (oldShelf, newShelf, book) => {
    const { handleReshelf } = this.props;
    handleReshelf(oldShelf, newShelf, book);
    this.setState((prevState) => {
      prevState.books[book.id].shelf = newShelf;
      return prevState;
    });
  };

  render() {
    const { searchTxt, books } = this.state;

    return (
      <div className="search-books">
        <SearchInput value={searchTxt} onChange={this.handleSearchChange} />
        <div className="search-books-results">
          <BooksGrid books={books} handleReshelf={this.handleSearchReshelf} />
          <ol className="books-grid" />
        </div>
      </div>
    );
  }
}

export default AllBooks;
