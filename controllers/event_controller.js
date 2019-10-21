const EventModel = require("./../database/models/event_model");

const show = (req, res) => {
    res.render("events/index");
}

const render = (req, res) => {
    res.render("events/new");
}

const create = async (req, res) => {
    let {title, eventDate, description} = req.body;
    let event = await EventModel.create({title, eventDate, description})
        .catch(err => res.status(500).send(err));
    res.render(`events/${events._id}`);
}

module.exports = {
    show,
    create,
    render
}