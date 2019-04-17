checkPrime = (val) => {
  if (val === 1) {
    return false;
  }
  else if (val === 2) {
    return true;
  }
  else {
    for (let x = 2; x < val; x++) {
      if(val % x === 0) {
        return false;
      }
    }
    return true;
  }
}

console.log(checkPrime(2));

