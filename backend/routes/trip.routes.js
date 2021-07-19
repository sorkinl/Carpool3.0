const controller = require("../controllers/trip.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/api/trip/create", controller.createTrip);

  app.post("/api/trip/find", controller.findTrip);
};
