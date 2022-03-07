# MyReads Project

This a web app that assists the user in managing books.
The app has two pages:

- **Main Page:** Lists books that the user has preiously selected classified by _Currently Reading_, _Want To Read_ and _Read_ shelves.

- **Search Page:** Contains an input where a user can search for books by title or author name in addition to a list of books that match the search query.

Each book in both pages has a selector for reclassifying that book.

## Running the Web App

To run and use the app:

- clone the repo with `git@github.com:khaled-elakkad/reactnd-project-myreads.git`
- navigate into the project directory with `cd reactnd-project-myreads`
- install all project dependencies with `npm install`
- start the development server with `npm start`

## What You're Getting

```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # Books Icon.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for the app.
    ├── App.js # The root of the app. Fetches already shelved books, reorganizes them into shelves, manages the state of the shelves, handles routing and passes down the shelves state and handlers to child routes.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── constants.js # Contains constants across the app.
    ├── helpers.js # Contains functions used by various components to provide different functionalities such as converting the array of books returned from the API into an object of shelves with child objects of books.
    ├── utils.js # Contains utility functions used by the helpers and components such as converting sentences into slugs.
    |
    ├── pages # contains the components for each route
    |   ├── AllBooks
    |   └── MyBooks
    |
    ├── components # contains the child componets of the routes
    |   ├── Book
    |   ├── BooksGrid
    │   ├── BookShelfChanger
    |   ├── BookShelves
    |   ├── SearchInput
    |   └── Shelf
    |
    ├── icons # Helpful images for the app.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   ├── arrow-drop-down.svg
    |   └── image-not-found.svg
    |
    ├── index.css # Global styles.
    └── index.js # It is used for DOM rendering only.
```

## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

- [`getAll`](#getall)
- [`update`](#update)
- [`search`](#search)

### `getAll`

Method Signature:

```js
getAll();
```

- Returns a Promise which resolves to a JSON object containing a collection of book objects.
- This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf);
```

- book: `<Object>` containing at minimum an `id` attribute
- shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]
- Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query);
```

- query: `<String>`
- Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
- These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Credits

Icons and Images used in the app not provided by the starter repo:

- [`findicons`](https://findicons.com/) for the books favicon.

- [`UXWing`](https://uxwing.com/) for the image not found svg.

## Contributing

This repository is Udacity Nanodegree project submission. Therefore, we most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).
