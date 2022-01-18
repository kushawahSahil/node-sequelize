const sequelize = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    return sequelize.define("registration", {
        Name: Sequelize.STRING,

        gender: {
            type: Sequelize.STRING,
            enum: ['Male', 'Female', 'Other']
        },

        Image: {
            type: Sequelize.STRING
        },

        Email: {
            type: Sequelize.STRING,
            defaultValue: 'test@gmail.com'
        },

        Password: Sequelize.STRING,



    }, { freeZeTableName: true, timestamps: false });

}