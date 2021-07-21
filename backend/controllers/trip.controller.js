//const uuid = require("uuid4");
const db = require("../models");
const Sequelize = require("sequelize");
const {gt, lte, ne, in: opIn} = Sequelize.Op;

const Trip = db.trip;
exports.createTrip = (req, res) => {
  const trip = req.body;
  console.log(trip);

  //TODO: Validate input parameter before pushing to db
  //tripid type should be uuid 
  Trip.create({
    tripid: trip.tripid,
    departdate: trip.departdate,
    description: trip.description,
    desttitle: trip.desttitle,
    destlat: trip.destlat,
    destlong: trip.destlong,
    origintitle: trip.origintitle,
    originlat: trip.originlat,
    originlong: trip.originlong,
    emptyseats: trip.emptyseats,
    uid: trip.uid,
    originpoint: {
        type: 'Point',
        coordinates: [req.body.originlat, req.body.originlong]
    },
    destpoint: {
      type: 'Point',
      coordinates: [req.body.destlat, req.body.destlong]
    }
  })
    .then(() => {
      res.send({ message: "Trip was created", body: trip })
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

//Find all trips with origin AND destination within 30km of origin and destination inputs
exports.findTripAround = (req, res) => {
  const search = req.body;
  console.log(search);

  //plain query as Sequelize doesn't support ST_Distance_Sphere() or ST_MakePoint() 
  const query = `
    SELECT
        "tripid", ST_DistanceSphere(ST_MakePoint(:originlat, :originlong), "originpoint") AS originDistance, ST_DistanceSphere(ST_MakePoint(:destlat, :destlong), "destpoint") AS destDistance
    FROM
        "trips"
    WHERE
        ST_DistanceSphere(ST_MakePoint(:originlat, :originlong), "originpoint") < :maxDistance AND ST_DistanceSphere(ST_MakePoint(:destlat, :destlong), "destpoint") < :maxDistance
  `;
  Trip.sequelize.query(query, {
    replacements: {
        originlat: parseFloat(search.originlat),
        originlong: parseFloat(search.originlong),
        destlat: parseFloat(search.destlat),
        destlong: parseFloat(search.destlong),
        maxDistance: 30 * 1000 //30km
    },
    type: Trip.sequelize.QueryTypes.SELECT
  })
  .then((tripResults) => {
    console.log("tripResults", tripResults);
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
    
