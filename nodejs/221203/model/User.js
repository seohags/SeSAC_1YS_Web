const mysql = require("mysql");

const cnn = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: 'sesac123',
    database: 'sesac_test'
});

exports.user = () => {
    return { id: 1, pw: 1234 }
}

var users =
    `spreatics//1234//스프레틱스
codee//4321//코디`;

exports.user2 = () => {
    return users;
}; 