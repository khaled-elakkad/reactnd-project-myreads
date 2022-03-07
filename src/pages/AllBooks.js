import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import qs from 'query-string';
import PropTypes from 'prop-types';
import SearchInput from '../components/SearchInput';
import BooksGrid from '../components/BooksGrid';
import * as BooksAPI from '../BooksAPI';
import { replaceWithShelvedBooks } from '../helpers';

class AllBooks extends Component {
  static propTypes = {
    shelves: PropTypes.object.isRequired,
    handleReshelf: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  };

  state = {
    query: '',
    books: {},
  };

  componentDidMount() {
    const { search } = this.props.location;
    if (search) {
      this.searchForBooks(qs.parse(search).query);
    }
  }

  searchForBooks = (query) => {
    const { shelves } = this.props;
    this.setState({ query });
    if (query) {
      BooksAPI.search(query).then((resultBooks) =>
        this.setState(() => {
          // "3DkX6Uo0gwIC"
          return {
            books: resultBooks.length
              ? replaceWithShelvedBooks(resultBooks, shelves)
              : {},
          };
        })
      );
    } else {
      this.setState({ books: {} });
    }
  };

  handleSearchChange = (event) => {
    const { history } = this.props;
    const { value } = event.target;
    history.push({ pathname: `/search`, search: `?query=${value}` });

    this.searchForBooks(value);
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
    const { query, books } = this.state;
    return (
      <div className="search-books">
        <SearchInput value={query} onChange={this.handleSearchChange} />
        <div className="search-books-results">
          <BooksGrid books={books} handleReshelf={this.handleSearchReshelf} />
          <ol className="books-grid" />
        </div>
      </div>
    );
  }
}

export default withRouter(AllBooks);
