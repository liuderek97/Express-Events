const mongoose = require("mongoose");
const eventSchema = require("../schemas/event_schema");
const eventModel = mongoose.model("Event", eventSchema);

module.exports = eventModel;