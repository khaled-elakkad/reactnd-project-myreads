import React from 'react';
import { Route } from 'react-router-dom';
import MyBooks from './pages/MyBooks';
import AllBooks from './pages/AllBooks';

import './App.css';

export default function BooksApp() {
  return (
    <div className="app">
      <Route exact path="/" component={MyBooks} />
      <Route path="/search" component={AllBooks} />
    </div>
  );
}
