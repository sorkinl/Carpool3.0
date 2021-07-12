module.exports = (sequelize, Sequelize) => {
  const Trip = sequelize.define(
    "users",
    {
      uid: {
        type: Sequelize.STRING,
        primaryKey: true,
      },
      classyear: {
        type: Sequelize.INTEGER,
      },
      email: {
        type: Sequelize.STRING,
      },
      firstname: {
        type: Sequelize.STRING,
      },
      lastname: {
        type: Sequelize.STRING,
      },
      gender: {
        type: Sequelize.STRING,
      },
      hub: {
        type: Sequelize.INTEGER,
      },
      major: {
        type: Sequelize.STRING,
      },
      phonenumber: {
        type: Sequelize.STRING,
      },
      photourl: {
        type: Sequelize.TEXT,
      },
      school: {
        type: Sequelize.STRING,
      },
      status: {
        type: Sequelize.INTEGER,
      },
      password: {
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
