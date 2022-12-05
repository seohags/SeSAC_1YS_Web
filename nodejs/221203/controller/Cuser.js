const User = require("../model/User");

exports.user = (req, res) => {
    User.get_user(function (result) {
        console.log(result);
        res.render("user", { data: result });
    });
};

exports.register = (req, res) => {
    User.register_user(req.body, function (id) {
        console.log(id);
        res.send(String(id)); //query 결과값
    })
    // insert req.body
};

exports.delete = (req, res) => {
    // mysql req.body.id 에 해당하는 데이터를 delete
    // 서버 응답 (res.send)
    User.delete_user(req.body.id, function () {
        res.send(true); // 서버는 응답을 어떻게든 받아야함.
    })
};

exports.get_user_by_id = (req, res) => {
    // req.query.id 에 해당하는 데이터를 조회
    // 서버 응답 > 조회한 데이터
    User.get_user_by_id_model(req.query.id, function (rows) {
        res.send(rows);
    });
};
