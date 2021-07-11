const config = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  host: config.HOST,
  dialect: config.dialect,
  operatorsAliases: false,

  pool: {
    max: config.pool.max,
    min: config.pool.min,
    acquire: config.pool.acquire,
    idle: config.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.trip = require("../models/trip.model.js")(sequelize, Sequelize);

db.trip.belongsToMany(db.user, {
  through: "user_trips",
  foreignKey: "tripId",
  otherKey: "userId",
});
db.user.belongsToMany(db.trip, {
  through: "user_trips",
  foreignKey: "userId",
  otherKey: "tripId",
});

module.exports = db;
