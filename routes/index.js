const express = require("express");
const router = express.Router();
const EventController = require("./../controllers/event_controller");

router.get("/", (req, res) => res.send("Welcome"));

router.get("/events", EventController.index);
router.get("/events/:id", EventController.show);
router.get("/events/new", EventController.render);
router.post("/events/new", EventController.create);

module.exports = router;