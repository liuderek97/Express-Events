
const index = (req, res) => {
  res.render("page/index");
}

const dashboard = (req, res) => {
  // note: req.session is not accessible in handlebars, hence it needs to be passed as an object to the handlebar
  let {email, name } = req.user
  res.render("page/dashboard", {email, name});
}

module.exports = {
  index,
  dashboard
}