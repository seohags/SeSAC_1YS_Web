const mysql = require("mysql");

const cnn = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: 'sesac123',
    database: 'user'
});

exports.get_visitor = (cb) => {
    var sql = 'SELECT * FROM visitor';
    cnn.query(sql, (err, rows) => {
        if (err) throw err;
        console.log("visitors : ", rows);
        cb(rows);
    })
};


exports.register_visitor = (info, cb) => {
    // info = req.body; {name: "" , comment: "" }
    var sql = `insert into visitor(name, comment) values('${info.name}', '${info.comment}');`;

    cnn.query(sql, (err, result) => {
        if (err) throw err;
        console.log("insert result : ", result);
        cb(result.insertId);
    })
};

exports.delete_visitor = (id, cb) => {
    var sql = `delete from visitor where id = ${id}`

    cnn.query(sql, (err, result) => {
        if (err) throw err;
        console.log("delete result : ", result);
        cb();
    })
};

exports.get_visitor_by_id_model = (id, cb) => {
    var sql = `select * FROM visitor where id = ${id}`;
    cnn.query(sql, (err, rows) => {
        if (err) throw err;
        console.log("select by id : ", rows);
        cb(rows[0]);
    })
};

exports.update_visitor = (info, cb) => {
    var sql = `update visitor set name='${info.name}', comment='${info.comment}' where id=${info.id}`;
    cnn.query(sql, (err, result) => {
        if (err) throw err;
        console.log("update result: ", result);
        cb();
    })
};

// mysql 과 연결하는 코드 , 쿼리를 보내는 코드는 model 에 작성했다.