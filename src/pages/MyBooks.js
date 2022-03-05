import React, { Component } from 'react';
import BookShelves from '../components/BookShelves';
import SearchLink from '../components/SearchLink';

export default function MyBooks() {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <BookShelves />
      <SearchLink />
    </div>
  );
}
