const express = require("express");
const router = express.Router();
const EventController = require("./../controllers/event_controller");

router.get("/", (req, res) => res.send("Welcome"));

router.get("/events", EventController.show);

module.exports = router;