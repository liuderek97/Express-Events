const express = require("express");
const PageController = require("../controllers/page_controller");
const router = express.Router();
const EventController = require("./../controllers/event_controller");

router.get("/", PageController.index);

router.get("/events", EventController.index);
router.get("/events/show/:id", EventController.show);

router.get("/events/edit/:id", EventController.edit);
router.put("/events/show/:id", EventController.update);

router.get("/events/new", EventController.render);
router.post("/events/new", EventController.create);

router.delete("/events/show/:id", EventController.destroy)

module.exports = router;