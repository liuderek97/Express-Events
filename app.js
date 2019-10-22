const express = require("express");
const exphbs = require("express-handlebars");
const mongoose = require("mongoose");
const methodOverride = require('method-override');

// const morgan = require("morgan");
const session = require('express-session')
const MongoStore = require('connect-mongo')(session);
const passport = require("passport");
const cookieParser = require('cookie-parser');

const app = express();
const path = require("path")

mongoose.connect("mongodb://localhost/events", { useNewUrlParser: true });

mongoose.Promise = global.Promise;

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: {expires: 600000},
  store: new MongoStore({ mongooseConnection: mongoose.connection })
}))
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.use(methodOverride('_method', { methods: ['POST', 'GET'] }));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname,"public")));

// app.use(morgan("combined"));
require("./config/passport");
app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
  console.log("USER", req.user)
  res.locals.user = req.user || null;
  next();
});

app.use(require("./routes"));


// app.use(express.static("public"));s

app.use(require("./middleware/error_handler_middleware"));
// for staging purposes


module.exports = app;