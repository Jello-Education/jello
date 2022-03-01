export const sortByKey = (array, key) => array.sort((a, b) => a[key] - b[key]);

export const sortBy = (field, reverse, primer) => {
  const key = primer ? (x) => primer(x[field]) : (x) => x[field];

  const isReverse = !reverse ? 1 : -1;

  return (a, b) => {
    const x = key(a);
    const y = key(b);
    return isReverse * ((x > y) - (y > x));
  };
};

export const groupBy = (items, key) =>
  items.reduce(
    (result, item) => ({
      ...result,
      [item[key]]: [...(result[item[key]] || []), item],
    }),
    {}
  );
