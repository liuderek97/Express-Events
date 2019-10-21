const express = require("express");
const exphbs = require("express-handlebars");
const mongoose = require("mongoose");
const methodOverride = require('method-override')
// const morgan = require("morgan");
const app = express();
const path = require("path")

mongoose.connect("mongodb://localhost:27017/events", { useNewUrlParser: true } );
mongoose.Promise = global.Promise;

mongoose.connection.on("error", (error) => console.log(error));

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.use(methodOverride('_method', { methods: ['POST', 'GET'] }));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname,"public")));

// app.use(morgan("combined"));

app.use(require("./routes"));

// app.use(express.static("public"));s

// app.use(require("./middleware/error_handler_middleware"));
// for staging purposes

module.exports = app;