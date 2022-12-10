const mysql = require("mysql");

const cnn = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: 'sesac123',
    database: 'user'
});


exports.post_signup = (data, cb) => {
    let sql = `insert into user(id, name, pw) values('${data.id}' , '${data.name}', '${data.pw}');`;
    cnn.query(sql, (err) => {
        if (err) throw err;
        cb();
    })
};

exports.post_signin = (id, pw ,cb) => {
    let sql = `select * from user where id='${id} and pw='${pw}';`
    cnn.query(sql, (err, rows) => {
        if (err) throw err;
        console.log("signin user : " , result);
        cb(rows);
    })
}

exports.update_profile = (data, cb) => { 
    var sql = `update user set name='${data.name}', pw='${data.pw}' where id=${data.id}`;
    cnn.query(sql, (err, result) => {
        if (err) throw err;
        console.log("update result: ", result);
        cb();
    })
};

exports.get_user = (cb) => {
    let sql = `SELECT * FROM user where id='${id}'`;
    cnn.query(sql, (err, rows) => {
        if (err) throw err;
        console.log("users : ", rows);
        cb(rows);
    })
};




