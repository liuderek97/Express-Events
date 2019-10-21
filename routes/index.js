const express = require("express");
const PageController = require("../controller/page_controller");
const router = express.Router();
const EventController = require("./../controllers/event_controller");

router.get("/", PageController.index);

router.get("/events", EventController.index);
router.get("/events/:id", EventController.show);
router.get("/events/new", EventController.render);
router.post("/events/new", EventController.create);

module.exports = router;