const romanNumeralRegex =
  /^M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;

function isValidRomanNumber(romanFigure) {
  if (typeof romanFigure !== "string") {
    return false;
  }
  const romanFigureInUpperCase = romanFigure.toUpperCase();
  return romanNumeralRegex.test(romanFigureInUpperCase);
}

module.exports = isValidRomanNumber;
