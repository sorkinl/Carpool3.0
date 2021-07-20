//const uuid = require("uuid4");
const db = require("../models");
const Sequelize = require("sequelize");
const {gt, lte, ne, in: opIn} = Sequelize.Op;

const Trip = db.trip;
exports.createTrip = (req, res) => {
  const trip = req.body;
  console.log(trip);
  Trip.create({
    trip,
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

//geometry data can be slightly inaccurate for large distances (Sequelize has no geograpghy data type)
exports.findTripAround = (req, res) => {
  const search = req.body;
  console.log(search);

  //plain SQL query since Sequelize doesn't support methods like ST_Distance_Sphere, or ST_MakePoint for findAll() 
  const query = `
    SELECT
        "tripid", ST_Distance_Sphere(ST_MakePoint(:originlat, :originlong), "originpoint") AS originDistance, ST_Distance_Sphere(ST_MakePoint(:destlat, :destlong), "destpoint") AS destDistance,
    FROM
        "trips"
    WHERE
        originDistance < :maxDistance AND destDistance < :maxDistance
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

//geography code
// const geomcol = ST_SetSRID(
//   ST_MakePoint(
//   (random()*360.0) - 180.0,
//   (acos(1.0 - 2.0 * random()) * 2.0 - pi()) * 90.0 / pi()),
//   4326)

// Trip.findAll({ 
//   where: { 
//     //Not sure
//     geography: ST_DWithin(geomcol::geography, ST_SetSRID(ST_MakePoint(long, lat),4326)::geography,30 * 1609.34);
//     // ST_DWithin(the_geom,ST_SetSRID( ST_Point(6.9333, 46.8167), 4326), 30000)
//     // ST_Within(the_geom, ST_Transform(ST_Buffer(ST_Transform(ST_SetSRID(ST_MakePoint(6.9333, 46.8167), 4326), 3857), 30000), 4326)) = 1
//   } 
// })
    
