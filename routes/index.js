const express = require("express");
const router = express.Router();
const multer  = require('multer');
const upload = multer({dest: "upload/"});



const PageController = require("../controllers/page_controller");
const EventController = require("../controllers/event_controller");

const AuthController = require("../controllers/auth_controller");
const { authRedirect, authorize } = require("../middleware/auth_middleware");
const passport = require('passport');

// router.get('/upload', (req, res) => res.sendFile(path.join(__dirname, 'public/upload')))

router.get("/", PageController.index);

router.get("/register", authRedirect, AuthController.registerNew);
router.post("/register", AuthController.registerCreate );

router.get("/login", AuthController.loginNew);

// router.post("/login", passport.authenticate('local', { failureRedirect: '/login', session: false }), AuthController.loginCreate)

router.post('/login', 
  passport.authenticate('local', { failureRedirect: '/login' }),
  AuthController.loginCreate
  );

router.get("/logout", AuthController.logout);
router.get("/dashboard", passport.authenticate('jwt', {session: false}), PageController.dashboard);

// router.post("/login", AuthController.loginCrea

router.get("/events", EventController.index);
router.get("/events/show/:id", EventController.show);

router.get("/events/edit/:id", EventController.edit);
router.put("/events/edit/:id", EventController.update);

router.get("/events/new", EventController.render);
router.post("/events",  upload.single('image'), EventController.create);

router.delete("/events/show/:id", EventController.destroy)

router.get("/events/attend/:id", EventController.attend);
router.get("/events/unattend/:id", EventController.unattend);

module.exports = router;