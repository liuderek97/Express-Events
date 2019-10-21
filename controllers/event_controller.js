const EventModel = require("./../database/models/event_model");

const index = async (req, res) => {
    let events = await EventModel.find();
    res.render("events/index", { events });
}

const show = async (req, res) => {
    let { id } = req.params;
    let event = await EventModel.findById(id)
        .catch(err => res.status(500).send(err))

    res.render("events/show", {event});
}

const render = (req, res) => {
    res.render("events/new");
}

const create = async (req, res) => {
    let {title, eventDate, description} = req.body;
    let event = await EventModel.create({title, eventDate, description})
        .catch(err => res.status(500).send(err));
    res.redirect(`/events`);
}

module.exports = {
    index,
    show,
    render,
    create
}