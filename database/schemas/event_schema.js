const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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
     user: {
         type: Schema.Types.ObjectId,
         ref: 'users'
     }
});

module.exports = EventSchema;