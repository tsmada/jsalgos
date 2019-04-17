const items = [23, 349, 283, 39, 20, 13, 39, 250, 350];

quickSort = (list) => {
  if (list.length < 2) {
    return list;
  }

  let pI = Math.floor(list.length / 2);
  let half = list[pI];
  let less = [];
  let greater = [];
  for (let i in list) {
    if (i != pI) {
      list[i] > half ? greater.push(list[i]) : less.push(list[i]);
    }
  }
  return [
    ...quickSort(less),
    half,
    ...quickSort(greater),
  ];
};

console.log(quickSort(items));