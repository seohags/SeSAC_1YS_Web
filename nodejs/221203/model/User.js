const mysql = require("mysql");

const cnn = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: 'sesac123',
    database: 'sesac_test'
});

exports.get_user = (cb) => {
    var sql = 'SELECT * FROM user';
    cnn.query(sql, (err, rows) => {
        if (err) throw err;
        console.log("users : ", rows);
        cb(rows);
    })
};

exports.register_user = (info, cb) => {
    let sql = `insert into user(id, name, password) values('${info.id}' , '${info.name}', '${info.password}');`;
    cnn.query(sql, (err, result) => {
        if (err) throw err;
        console.log("insert result : ", result);
        cb(result.insertId);
    })
};

exports.get_user_by_id_model = (id, cb) => {
    var sql = `select * FROM user where id = ${id}`;
    cnn.query(sql, (err, rows) => {
        if (err) throw err;
        console.log("select by id : ", rows);
        cb(rows[0]);
    })
};


exports.update_user = (info, cb) => {
    var sql = `update user set name='${info.name}', comment='${info.comment}' where id=${info.id}`;
    cnn.query(sql, (err, result) => {
        if (err) throw err;
        console.log("update result: ", result);
        cb();
    })
};





