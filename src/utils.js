export const arrayToEmptyObjects = (arr) =>
  arr.reduce(
    (previousValue, currentValue) => ({
      ...previousValue,
      [currentValue]: {},
    }),
    {}
  );

export const slugify = (words) =>
  words
    .toLowerCase()
    .split(' ')
    .join('-');

export const arrayToObjects = (arr) =>
  arr.reduce(
    (previousValue, currentValue) => ({
      ...previousValue,
      [currentValue.id]: { ...currentValue },
    }),
    {}
  );
