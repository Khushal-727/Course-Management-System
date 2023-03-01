const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize('khushals', 'khushals' , '9m7fJ4D1b7Xpmqk9cpMI',  {
    host: "15.206.7.200",
    port: 3310,
    logging:false,
    dialect: 'mysql'
});

try {
    sequelize.authenticate();
    console.log('Connected');
} catch(error) {
    console.error('Not Connected, Error: ',error);
}

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.course = require('../models/course') (sequelize,DataTypes)

db.sequelize.sync({force:false})
.then(()=> {
    console.log("Server is Ready to use");
});

module.exports=db
