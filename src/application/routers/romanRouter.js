const express = require("express");
const router = express.Router();
const convertController = require("../controllers/convertController");

router.get("/:romanValue", convertController);

module.exports = router;
