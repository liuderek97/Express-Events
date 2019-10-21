const express = require("express");
const path = require("path")
require("./connect");
const app = require('./app');
port = 3000;

global.HTTPError = class HTTPError extends Error {
    constructor(statusCode, message) {
        super(message);
  
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, HTTPError);
        }
        this.name = "HTTPError";
        this.statusCode = statusCode;
    }
};


app.listen(port, () => console.log(`Listening on port ${port}`));
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname,"public")));
