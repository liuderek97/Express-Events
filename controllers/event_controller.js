const EventModel = require("./../database/models/event_model");

const show = (req, res) => {
    res.render("events/index");
}

module.exports = {
    show
}