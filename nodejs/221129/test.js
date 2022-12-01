const mysql = require("mysql");
const cnn = mysql.createConnection({
    host: "localhost",
    user: "user",
    password: "sesac123",
    database: "sesac_test"
});

cnn.query("select * from user", (err, result) => {
    if (err) throw (err);
    console.log(result);
});