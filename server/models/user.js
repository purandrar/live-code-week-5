"use strict";
module.exports = (sequelize, DataTypes) => {
  const model = sequelize.Sequelize.Model;
  class User extends model {}
  User.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING
    },
    { sequelize }
  );
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};
