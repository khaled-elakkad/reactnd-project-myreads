import React, { Component } from 'react';
import SearchInput from '../components/SearchInput';
import BooksGrid from '../components/BooksGrid';
import * as BooksAPI from '../BooksAPI';
import { replaceWithShelvedBooks } from '../helpers';

/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */

class AllBooks extends Component {
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
