import { bookShelves } from './constants';

export const arrayToEmptyObjects = (arr) =>
  arr.reduce(
    (previousValue, currentValue) => ({
      ...previousValue,
      [currentValue]: {},
    }),
    {}
  );

export function groupBooksByShelves(books) {
  const shelves = arrayToEmptyObjects(Object.keys(bookShelves));
  for (let book of books) {
    const shelfName = book.shelf;
    shelves[shelfName] = { ...shelves[shelfName], [book.id]: book };
  }
  return shelves;
}

export const slugify = (words) =>
  words
    .toLowerCase()
    .split(' ')
    .join('-');
