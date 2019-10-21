const express = require("express");
const PageController = require("../controllers/page_controller");
const router = express.Router();
<<<<<<< HEAD
const PageController = require("../controllers/page_controller");
const AuthController = require("../controllers/auth_controller");
const { authRedirect, authorize } = require("../middleware/auth_middleware");
const passport = require('passport');

router.get("/", PageController.index);
router.get("/register", authRedirect, AuthController.registerNew);
router.post("/register", AuthController.registerCreate );

router.get("/login", AuthController.loginNew);

router.post("/login", passport.authenticate('local', { failureRedirect: '/login', session: false }), AuthController.loginCreate)

router.get("/logout", AuthController.logout);
router.get("/dashboard", passport.authenticate('jwt', {session: false}), PageController.dashboard);

// router.post("/login", AuthController.loginCrea
=======
const EventController = require("./../controllers/event_controller");

router.get("/", PageController.index);

router.get("/events", EventController.index);
router.get("/events/show/:id", EventController.show);

router.get("/events/edit/:id", EventController.edit);
router.put("/events/show/:id", EventController.update);

router.get("/events/new", EventController.render);
router.post("/events/new", EventController.create);

router.delete("/events/show/:id", EventController.destroy)
>>>>>>> c2736dbcb40e7a9e16bd0fd89f453514e1d36b2d

module.exports = router;