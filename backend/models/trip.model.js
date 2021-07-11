module.exports = (sequelize, Sequelize) => {
  const Trip = sequelize.define(
    "trips",
    {
      tripid: {
        type: Sequelize.TEXT,
        primaryKey: true,
      },
      departdate: {
        type: Sequelize.DATE,
      },
      description: {
        type: Sequelize.TEXT,
      },
      desttitle: {
        type: Sequelize.STRING,
      },
      destlat: {
        type: Sequelize.DECIMAL,
      },
      destlong: {
        type: Sequelize.DECIMAL,
      },
      origintitle: {
        type: Sequelize.STRING,
      },
      originlat: {
        type: Sequelize.DECIMAL,
      },
      originlong: {
        type: Sequelize.DECIMAL,
      },
      emptyseats: {
        type: Sequelize.INTEGER,
      },
      uid: {
        type: Sequelize.STRING,
      },
      createdat: {
        type: Sequelize.DATE,
      },
    },
    { timestamps: false }
  );
  return Trip;
};
