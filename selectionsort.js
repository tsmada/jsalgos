const items = [23, 349, 283, 39, 20, 13, 39, 250, 350];

findLargestValue = (list) => {
  let largeIndex = 0;
  let largest = items[0];
  for (let i=0; i < items.length; i++) {
    if (items[i] > largest) {
      largest = items[i];
      largeIndex = i;
    };
  };
  return largeIndex;
};


selectionSort = (list) => {
  let finalSort = [];
  let lrgItem;
  while (list.length) {
    lrgItem = findLargestValue(list);
    finalSort.push(list[lrgItem]);
    list.splice(lrgItem, 1);
  }
  return finalSort;
}

console.log(selectionSort(items));