const {ensureAuthenticated, ensureGuest} = require('../auth/auth');

const index = (req, res) => {
  ensureGuest
  res.render("page/index");
}

const dashboard = (req, res) => {
  // note: req.session is not accessible in handlebars, hence it needs to be passed as an object to the handlebar
 ensureAuthenticated

  let {email, firstName, lastName } = req.user
  res.render("page/dashboard", {email, firstName, lastName});
}

module.exports = {
  index,
  dashboard
}