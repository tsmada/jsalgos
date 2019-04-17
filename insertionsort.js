// O(n^2)
// double for loop

insertionSort = (array) => {
  let i;
  let j;
  let count = 0;

  for (i = 1; i < array.length; i++) {
    for (j = 0; j < i; j++) {
      console.log(array);
      count++;

      if (array[i] < array[j]) {
        const [item] = array.splice(i, 1);
        array.splice(j, 0, item);
      }
    }
  }

  console.log(array);
  console.log(`Iterations: ${count}`);

  return array;
}

let numbers = [10, 5, 6, 3, 2, 8, 9, 4, 7, 1];

insertionSort(numbers);
