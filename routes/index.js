const express = require("express");
const router = express.Router();

const PageController = require("../controllers/page_controller");
const EventController = require("../controllers/event_controller");

const AuthController = require("../controllers/auth_controller");
const { authRedirect, authorize } = require("../middleware/auth_middleware");
const passport = require('passport');

router.get("/", EventController.index);

router.get("/register", authRedirect, AuthController.registerNew);
router.post("/register", AuthController.registerCreate );

router.get("/login", AuthController.loginNew);

router.post("/login", passport.authenticate('local', { failureRedirect: '/login', session: false }), AuthController.loginCreate)

router.get("/logout", AuthController.logout);
router.get("/dashboard", passport.authenticate('jwt', {session: false}), PageController.dashboard);

// router.post("/login", AuthController.loginCrea

router.get("/events", EventController.index);
router.get("/events/show/:id", EventController.show);

router.get("/events/edit/:id", EventController.edit);
router.put("/events/edit/:id", EventController.update);

router.get("/events/new", EventController.render);
router.post("/events/new", EventController.create);

router.delete("/events/show/:id", EventController.destroy)

module.exports = router;