const items = [1, 5, 2, 7, 3, 12, 6, 10];

// O(log n)
// log is flip of exponential
// 2^3 = 8
// 2^10 = 1024
// 2^20 = 1 million

search = (list, item) => {
  let low = 0;
  let high = list.length;
  let counter = 0;

  while (low <= high) {
    counter++;
    let mid = Math.floor((low + high) / 2);
    let guess = list[mid];
    console.log(counter);
    if (guess === item) return true;
    if (guess > item) high = mid - 1;
    else low = mid + 1;
  }
  console.log(counter);
  return null;
}

console.log(search(items, 12));