import {
  DB,
  USER,
  PASSWORD,
  HOST,
  dialect as _dialect,
  pool as _pool,
} from "../config/db.config.js";

import Sequelize from "sequelize";
const sequelize = new Sequelize(DB, USER, PASSWORD, {
  host: HOST,
  dialect: _dialect,
  operatorsAliases: false,

  pool: {
    max: _pool.max,
    min: _pool.min,
    acquire: _pool.acquire,
    idle: _pool.idle,
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

export default db;
