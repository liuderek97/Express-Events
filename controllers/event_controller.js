const EventModel = require("./../database/models/event_model");


const index = async (req, res) => {
    let events = await EventModel.find();
    // console.log("EVENTS", events)
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

const edit = async (req, res) => {
    let { id } = req.params;
    let event = await EventModel.findById(id)
        .catch(err => res.status(500).send(err));
    res.render("events/edit", {event});
}

const update = async (req, res) => {
    let { id } = req.params;
    let { title, eventDate, description } = req.body;
    await EventModel.findByIdAndUpdate(id, {title, eventDate, description})
        .catch(err => res.status(500).send(err));

    res.redirect(`/events/show/${id}`);
}

const create = async (req, res) => {
    let {title, eventDate, description} = req.body;
    let user = req.user.id
    if (typeof req.file === "undefined") {
        image = '../images/defaults/default-event-thumb.jpg'
    }else{
        image = req.file.filename
    }

    
    let event = await EventModel.create({title, eventDate, description, image, user})
        .catch(err => res.status(500).send(err));
    res.redirect(`/events`);
}

const destroy = async (req, res) => {
    let { id } = req.params;
    await EventModel.findByIdAndDelete(id)
        .catch(err => res.status(500).send(err));

    res.redirect("/events")
}

const attend = async (req, res) => {
    let { id } = req.params;
    let event = await EventModel.findByIdAndUpdate(id, { $push: { "attendees": req.user}})
        .catch(err => res.status(500).send(err));

    res.redirect(`/events/show/${event._id}`);
}

const unattend = async (req, res) => {
    let { id } = req.params;
    let event = await EventModel.findByIdAndUpdate(id, { $pull: { "attendees": {_id: req.user._id}}})
        .catch(err => res.status(500).send(err));

    res.redirect(`/events/show/${event._id}`);
}

module.exports = {
    index,
    show,
    render,
    edit,
    update,
    create,
    destroy,
    attend,
    unattend
}