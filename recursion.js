counter = () => {
  for (let i = 0; i <= 10; i++) {
    console.log(i)
  }
}

recursiveCounter = (value) => {
  console.log(value)
  while (value !== 10) {
    return recursiveCounter(value + 1)
  }
}

// counter();

recursiveCounter(0);