//const uuid = require("uuid4");
const db = require("../models");
const Sequelize = require("sequelize");
const {gt, lte, ne, in: opIn} = Sequelize.Op;

const Trip = db.trip;
exports.createTrip = (req, res) => {
  const trip = req.body;
  console.log(trip);
  Trip.create(trip)
    .then(() => res.send({ message: "Trip was created", body: trip }))
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.findTrip = (req, res) => {
  const trip = req.body;
  console.log(trip);
  Trip.findAll({ 
    where: { 
      //longitude and latitude within 30km radius  
    } 
  })
    .then((tripResults) => {
      if (!tripResults) {
        return res.status(404).send({ message: "No trips found." });
      }
      res.status(200).send({
        message: "Trips found",
        body: tripResults
      });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};
