const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/express-events", { useNewUrlParser: true });
mongoose.Promise = global.Promise;
mongoose.connection.on("error", console.log);