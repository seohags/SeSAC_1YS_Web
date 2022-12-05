const Visitor = require("../model/Visitor");

exports.visitor = (req, res) => {
    Visitor.get_visitor(function (result) {
        console.log(result);
        res.render("visitor", { data: result });
    });
};

exports.register = (req, res) => {
    Visitor.register_visitor(req.body, function (id) {
        console.log(id);
        res.send(String(id)); //query 결과값
    })
    // insert req.body
};

exports.delete = (req, res) => {
    // mysql req.body.id 에 해당하는 데이터를 delete
    // 서버 응답 (res.send)
    Visitor.delete_visitor(req.body.id, function () {
        res.send(true); // 서버는 응답을 어떻게든 받아야함.
    })
};

exports.get_visitor_by_id = (req, res) => {
    // req.query.id 에 해당하는 데이터를 조회
    // 서버 응답 > 조회한 데이터
    Visitor.get_visitor_by_id_model(req.query.id, function (rows) {
        res.send(rows);
    });
};




