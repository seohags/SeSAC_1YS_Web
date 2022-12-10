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

// sequelize 사용 할때 foreign key 걸기

db.User = require("./Visitor")(sequelize, Sequelize);
db.Product = require("./Product")(sequelize, Sequelize);
db.Payment = require("./Payment")(sequelize, Sequelize);

// foreign key 하나 걸때 두개의 함수 사용해야댐 

db.User.hasMany(db.Payment, {
    foreignKey: "user_id", // payment에 있는 user_id 
    sourceKey: "user_id", // user에 있는 user_id
    onDelete: "cascade"
});

db.Payment.belongsTo(db.User, {
    foreignKey: "product_id", // payment에 있는 user_id 
    sourceKey: "product_id", // user에 있는 user_id
    onDelete: "cascade"
});

db.Product.hasMany(db.Product, {
    foreignKey: "product_id", // payment에 있는 user_id 
    sourceKey: "product_id", // user에 있는 user_id
    onDelete: "cascade"
});


// db = {
//     "Sequelize" : Sequelize,
//     "sequelize" : sequelize ,
//     "visitor" : "Visitor.js에서 return 받은 값"
// } 


module.exports = db;

