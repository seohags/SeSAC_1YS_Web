const mysql = require("mysql");
const cnn = mysql.createConnection({
    host: "localhost",
    user: "product",
    password: "sesac123",
    database: "sesac_test"
});

cnn.query("select * from product", (err, result) => {
    if (err) throw (err);
    console.log(result);
});