function convertRomanToArab(romanValue) {
  if (typeof romanValue !== "string") {
    throw new Error("TYPE_ERROR");
  }
  const romanValueInUpperCase = romanValue.toUpperCase();
  const figureList = romanValueInUpperCase.split("");

  return figureList.reduce((absoluteValue, currentFigure, index) => {
    switch (currentFigure) {
      case "I":
        if (figureList[index + 1] === "V" || figureList[index + 1] === "X") {
          return absoluteValue;
        }
        absoluteValue += 1;
        return absoluteValue;

      case "V":
        if (figureList[index - 1] !== "I") {
          absoluteValue += 5;
        } else {
          absoluteValue += 4;
        }
        return absoluteValue;

      case "X":
        if (figureList[index - 1] === "I") {
          absoluteValue += 9;
          return absoluteValue;
        }
        if (figureList[index + 1] === "L" || figureList[index + 1] === "C") {
          return absoluteValue;
        }
        absoluteValue += 10;
        return absoluteValue;

      case "L":
        if (figureList[index - 1] !== "X") {
          absoluteValue += 50;
        } else {
          absoluteValue += 40;
        }
        return absoluteValue;

      case "C":
        if (figureList[index - 1] === "X") {
          absoluteValue += 90;
          return absoluteValue;
        }
        if (figureList[index + 1] === "D" || figureList[index + 1] === "M") {
          return absoluteValue;
        }
        absoluteValue += 100;
        return absoluteValue;

      case "D":
        if (figureList[index - 1] !== "C") {
          absoluteValue += 500;
        } else {
          absoluteValue += 400;
        }
        return absoluteValue;

      case "M":
        if (figureList[index - 1] === "C") {
          absoluteValue += 900;
          return absoluteValue;
        }

        absoluteValue += 1000;
        return absoluteValue;

      default:
        throw new Error(`${currentFigure} is an invalid character`);
    }
  }, 0);
}

module.exports = convertRomanToArab;
