function isDivisbleByN(arr, n) {
  let result = arr.filter((elem) => {
    if (elem % n == 0) {
      return elem;
    }
  });

  return result;
}

module.exports = isDivisbleByN