const arrayToSearchThrough = [];
for (let i = 1; i <= 1000; i++) {
  arrayToSearchThrough.push(i);
}

exports.linearSearch = function (valueToFind, arrayToSearchThrough) {
  let index;
  for (let x = 0; x < arrayToSearchThrough.length; x++) {
    if (arrayToSearchThrough[x] === valueToFind) {
      index = x;
    }
  }
  return index;
};

exports.linearSearchGlobal = function (valueToFind, arrayToSearchThrough) {
  let indices = [];
  for (let x = 0; x < arrayToSearchThrough.length; x++) {
    if (arrayToSearchThrough[x] === valueToFind) {
      indices.push(x);
    }
  }
  return indices;
};
