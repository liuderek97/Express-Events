const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = require('./user_schema');

const EventSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    eventDate: {
        type: Date,
        required: true
    },
    description: {
        type: String,
        required: true
    },
  
    image:{
        type: String,
        required: true
    }
});

module.exports = EventSchema;