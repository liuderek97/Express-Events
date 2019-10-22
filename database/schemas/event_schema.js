const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const userSchema = require('./user_schema');

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

    user:{
        type: Schema.Types.ObjectId,
        ref: "users"
    },
  
    image:{
        type: String,
        required: false
    }
});

module.exports = EventSchema;