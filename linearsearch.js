const items = [1, 5, 2, 7, 3, 12, 6, 10];

// O(n)
// log is flip of exponential
// 2^3 = 8
// 2^10 = 1024
// 2^20 = 1 million

search = (list, item) => {
  let counter = 0;
  let found = false;

  for (let val of list) {
    counter++;
    if (item === val) {
      found = true;
      break;
    }
  }
  console.log(`Iterations: ${counter}`);
  return false;
}

console.log(search(items, 22));