export default (sequelize, Sequelize) => {
  return sequelize.define("trips", {
    tripid: {
      type: Sequelize.STRING,
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
    school: {
      type: Sequelize.STRING,
    },
    uid: {
      type: Sequelize.STRING,
    },
    createdat: {
      type: Sequelize.DATE,
    },
  });
};
