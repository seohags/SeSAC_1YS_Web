const User = require("../model/User");
const { connect } = require("../routes");

exports.index = (req,res) => {
    res.render("index");
}

exports.signin = (req, res) => {
    res.render("signin");
}

exports.signup = (req, res) => {
    res.render("signup");
}

exports.post_signup = (req, res) => {
    User.post_signup(req.body, () => {
        // 여기에 회원가입을 하는 유효성 검사를 하면 좋은데 
        res.send(true);
    });
}
exports.post_signin = (req,res) => {    
   User.post_signin(req.body.id , req.body.pw, (result) => {
    // 여기도 .
    if (result.length > 0) res.send(true);
    else res.send(false);
   });
}


