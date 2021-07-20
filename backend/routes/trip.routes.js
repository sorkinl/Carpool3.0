const controller = require("../controllers/trip.controller");
const { authJwt } = require("../middleware");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  //[authJwt.verifyToken]
  app.post("/api/trip/findAround", controller.findTripAround);
  
  app.post("/api/trip/create", controller.createTrip);
};
