const Visitor = (Sequelize, DataTypes) => {
    return Sequelize.define(
        "visitor", // create table visitor()
        {
            id: { // id int not null primary key auto_increment
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            name: { // name varchar(10) not null
                type: DataTypes.STRING(10),
                allowNull: false,
            },
            comment: { // comment mediumText 
                type: DataTypes.TEXT('medium'),
            }
        },
        {
            tableName: "visitor", // select * from visitor . sequelize 가 sql문으로 바꿀 때 자동으로 s를 붙임 그래서 얼림 
            freezeTableName: true,
            timestamps: false // default true createAt modifyAt 방명록 적힌 시간 기록
            // collate , charset : "UTF8" 
        }
    )
}

module.exports = Visitor;

// 정의했고 Vititor 로 넣어놈 . Visitor 을 실행시켜야만댐