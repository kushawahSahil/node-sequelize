const Sequelize = require('sequelize');

const sequelize = new Sequelize('nodesequelize', 'root', '', {
    host: "localhost",
    dialect: "mysql",

});

sequelize.authenticate()
    .then(() => {
        console.log("Connected");
    })
    .catch(() => {
        console.log("error" + err);
    });


const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require('../Models/user')(sequelize, Sequelize);
db.addressBook = require('../Models/addressBook')(sequelize, Sequelize);
db.sequelize.sync()
    .then(() => {
        console.log('yes re-sync');
    })


module.exports = db;