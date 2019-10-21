<<<<<<< HEAD
const index = (req, res) => {
  res.render("page/index");
}

const dashboard = (req, res) => {
  // note: req.session is not accessible in handlebars, hence it needs to be passed as an object to the handlebar
  let {email } = req.user
  res.render("page/dashboard", {email});
}

module.exports = {
  index,
  dashboard
=======
const index = (req,res) => {
    res.render("page/index")
}

module.exports = {
    index
>>>>>>> c2736dbcb40e7a9e16bd0fd89f453514e1d36b2d
}