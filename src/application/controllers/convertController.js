const convertRomanToArab = require("../../domain/romanFigure/convertRomanToArab");

function convertController(req, res) {
  const figureToConvert = req.query.value;
  let valueInAragFigure;
  try {
    valueInAragFigure = convertRomanToArab(figureToConvert);
  } catch (error) {
    res.status(400).json({
      erreur: error.message,
    });
    return;
  }

  res.json({
    nombreEnChiffreRomain: figureToConvert,
    nombreEnChiffreArabe: valueInAragFigure,
  });
}

module.exports = convertController;
