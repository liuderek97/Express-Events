const express = require("express");
const PageController = require("../controller/page_controller");
const router = express.Router();

router.get("/", PageController.index);

module.exports = router;