// divide and conquer recursively

let count = 0;

merge = (left, right) => {
  count++;
  const sorted = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      sorted.push(left.shift());
    } else {
      sorted.push(right.shift());
    }
  }

  const results = [...sorted, ...left, ...right];

  console.log(results);
  console.log(`Iterations: ${count}`);

  return results;
}

mergeSort = (array) => {
  console.log(array);
  count++;
  const { length } = array;

  if (length < 2) {
    return array;
  }

  const middle = Math.floor(length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

let numbers = [10, 5, 6, 3, 2, 8, 9, 4, 7, 1];

mergeSort(numbers);


