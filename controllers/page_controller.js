
const index = (req, res) => {
  res.render("page/index");
}

const dashboard = (req, res) => {
  // note: req.session is not accessible in handlebars, hence it needs to be passed as an object to the handlebar
  let {email, firstName, lastName } = req.user
  res.render("page/dashboard", {email, firstName, lastName});
}

module.exports = {
  index,
  dashboard
}