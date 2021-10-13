const express = require("express");
const router = express.Router();
const convertController = require("../controllers/convertController");

router.get("/", convertController);

module.exports = router;
