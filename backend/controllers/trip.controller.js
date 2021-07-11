//const uuid = require("uuid4");
const db = require("../models");

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
