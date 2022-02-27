function replaceDivisible(x, y) {
  let result = [];
  for (let i of x) {
    if (i % y == 0) {
      result.push("isDivisible");
    } else result.push(i);
  }
  return result;
}

module.exports = replaceDivisible;
