import { bookShelves } from './constants';
import { arrayToEmptyObjects } from './utils';

export function groupBooksByShelves(books) {
  const shelves = arrayToEmptyObjects(Object.keys(bookShelves));
  for (let book of books) {
    const shelfName = book.shelf;
    shelves[shelfName] = { ...shelves[shelfName], [book.id]: book };
  }
  return shelves;
}

export const replaceWithShelvedBooks = (resultBooks, currentShelves) =>
  resultBooks.reduce((previousValue, currentValue) => {
    let shelvedBook;
    for (let shelf in currentShelves) {
      if (currentShelves[shelf][currentValue.id]) {
        shelvedBook = currentShelves[shelf][currentValue.id];
        break;
      }
    }
    return {
      ...previousValue,
      [currentValue.id]: shelvedBook || { ...currentValue, shelf: 'none' },
    };
  }, {});
