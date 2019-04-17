// Compare and shift each number per iteration
// Mutate original array and sort in place

bubbleSort = (array) => {
  let swapped = false;
  do {
    swapped = false

    array.forEach((item, index) => {
      if (item > array[index + 1]) {
        const temp = item;
        array[index] = array[index + 1];
        array[index + 1] = temp;
        swapped = true;
      }
    })
  } while (swapped)
  return array
}

const numbers = [4, 2, 4, 1, 6, 3, 10, 28, 3, 58, 5002, 13, 24];

console.log(bubbleSort(numbers));