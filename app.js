const express = require("express");
const exphbs = require("express-handlebars");
// const morgan = require("morgan");
const app = express();
const path = require("path")

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname,"public")));

// app.use(morgan("combined"));

app.use(require("./routes"));

// app.use(express.static("public"));s

// app.use(require("./middleware/error_handler_middleware"));

module.exports = app;