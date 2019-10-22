const User = require("../database/models/user_model");
// const Event = require('../database/models/evemt_model')
const jwt = require("jsonwebtoken");

const registerNew = (req, res) => {
    res.render("auth/register");
}

const registerCreate = async (req, res) => {
    let {email, password, lastName, firstName} = req.body;
    // let encrypetPassword = password.
    let user = await User.create({email, password, firstName, lastName});
   

    // attach the registered user to the session
    // req.session.user = user
    // passport login
    
    req.login(user, (err) => {
        if(err) {
            return next(err);
        }
    })
    console.log(user);
    const token = jwt.sign({sub: req.user._id}, 'secretkey');
    res.cookie("jwt", token);
    res.redirect("/dashboard");
}

const loginNew = (req, res) => {
    res.render("auth/login");
}


const loginCreate = async (req,res) => {
    const token = jwt.sign({sub: req.user._id}, 'secretkey');
    console.log("token", token);
    // res.json(token);
    res.cookie("jwt", token);
    res.redirect('/dashboard');
    // sign the user details to generate json web token
}
const logout = (req, res) => {
    // req.session.destroy(() => {
    //     res.redirect("/");
    // })
    // passport logout
    req.logout();
    // remove jwt from cookie
    res.cookie("jwt", null, { maxAge: -1 });
    res.redirect("/");
}


module.exports = {
    registerNew,
    registerCreate,
    loginNew,
    loginCreate,
    logout
}