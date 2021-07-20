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
        type: Sequelize.TEXT,
      },
      destlat: {
        type: Sequelize.DOUBLE,
      },
      destlong: {
        type: Sequelize.DOUBLE,
      },
      origintitle: {
        type: Sequelize.TEXT,
      },
      originlat: {
        type: Sequelize.DOUBLE,
      },
      originlong: {
        type: Sequelize.DOUBLE,
      },
      originpoint: {
        type: Sequelize.GEOMETRY('POINT'),//store geometry of type point
        allowNull: false
      },
      destpoint: {
        type: Sequelize.GEOMETRY('POINT'),
        allowNull: false
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
