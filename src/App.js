import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';
import MyBooks from './pages/MyBooks';
import AllBooks from './pages/AllBooks';
import * as BooksAPI from './BooksAPI';
import { groupBooksByShelves } from './helpers';

import './App.css';

class App extends Component {
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
      <div className="app">
        {Object.entries(shelves).length === 0 ? (
          <div />
        ) : (
          <Fragment>
            <Route
              exact
              path="/"
              render={() => (
                <MyBooks shelves={shelves} handleReshelf={this.handleReshelf} />
              )}
            />
            <Route
              path="/search"
              render={() => (
                <AllBooks
                  shelves={shelves}
                  handleReshelf={this.handleReshelf}
                />
              )}
            />
          </Fragment>
        )}
      </div>
    );
  }
}

export default App;
