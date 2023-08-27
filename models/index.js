const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('student', 'root', 'abdullah@123', {
    host: '127.0.0.1',
    logging: false,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 1000
    }
});

sequelize.authenticate()
    .then(() => {
        console.log("Connection Successfully Established!");
    })
    .catch(err => {
        console.error("Unable to connect to the database:", err);
    });

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require('./users')(sequelize, DataTypes);

db.sequelize.sync({ force: true, match: /student$/ })
    .then(() => {
        console.log('Successfully synced.');
    })
    .catch(err => {
        console.error('Sync error:', err);
    });

module.exports = db;
