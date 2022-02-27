function divisible(a) {
  let result = a.filter((elem) => {
    if (elem % 2 == 0 && elem > 15) {
      return elem;
    }
  });
  return result.length;
}

module.exports = divisible
