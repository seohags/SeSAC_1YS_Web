const Sequelize = require("sequelize");

const config = require("../config/config.json")["development"];

// config = {
//         "host": "localhost",
//         "database": "sesac_test",
//         "username": "user",
//         "password": "sesac123",
//         "dialect": "mysql"
//     }

const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Visitor = require("./Visitor")(sequelize, Sequelize);

// db = {
//     "Sequelize" : Sequelize,
//     "sequelize" : sequelize ,
//     "visitor" : "Visitor.js에서 return 받은 값"
// } 

module.exports = db;

