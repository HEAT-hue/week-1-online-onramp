function noOfElements(x, y, z) {
  let result = x.filter((elem) => {
    if (elem >= y && elem <= z) {
      return elem;
    }
  });
  return result.length;
}

module.exports = noOfElements
