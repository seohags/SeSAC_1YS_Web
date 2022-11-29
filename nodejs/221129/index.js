const { render } = require("ejs");
const mysql = require("mysql");
const express = require("express");
const app = express();
const port = 8000;

const cnn = mysql.createConnection({
    host: "localhost",
    user: "user",
    password: "sesac123",
    database: "sesac_test"
});

app.set("view engine", 'ejs');

app.get("/", (req, res) => {
    cnn.query("select * from product", (err, result) => {
        if (err) throw (err);

        console.log(result);
        res.render("index", { rows: result });
    })
});

app.listen(port, () => {
    console.log("open : ", port);
})
