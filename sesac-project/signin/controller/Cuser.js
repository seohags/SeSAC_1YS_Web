const User = require("../model/User");
const { connect } = require("../routes");

exports.index = (req, res) => {
    res.render("index",);
}

exports.signin = (req, res) => {
    res.render("signin",);
}

exports.signup = (req, res) => {
    res.render("signup",);
}

exports.post_signup = (req, res) => {
    User.post_signup(req.body, () => {
        res.send("회원가입 성공");
    });
}

exports.post_signin = (req, res) => {
    User.post_signin(req.body.id, req.body.pw, (result) => {
        if (result.length > 0) res.send(true);
        else res.send(false);
    });
}

// exports.profile = (req, res) => {
//     User.get_user(req.body.id, function (result) {
//         if (result.length > 0) res.render("mypage", { data: result[0] });
//         else res.redirect("/user/mypage");
//     })
// }

// exports.profile_edit = (req, res) => {
//     User.update_profile(req.body, function () {
//         res.send(true);
//     })
// }

// exports.profile_delete = (req, res) => {
//     User.delete_user(req.body.id, function () {
//         res.send(true);
//     })
// }
