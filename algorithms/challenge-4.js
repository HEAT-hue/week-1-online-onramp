function highestSum(x, y) {
  let firstSum = x.reduce((prev, curr) => {
    return prev + curr;
  });

  let secondSum = y.reduce((prev, curr) => {
    return prev + curr;
  });

  if (firstSum > secondSum) {
    return firstSum;
  }

  return secondSum;
}

module.exports = highestSum