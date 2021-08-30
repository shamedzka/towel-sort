module.exports = function towelSort (matrix) {
  if (matrix === undefined) {
    return []
  };
  let result = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let x = 0; x < matrix[i].length; x++) {
      let columnNumber = i % 2 === 0
      ? x
      : (matrix[i].length - x - 1);
      result.push((matrix[i][columnNumber]));
    }
  }
  return result
}
