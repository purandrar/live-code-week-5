"use strict";
module.exports = (sequelize, DataTypes) => {
  const model = sequelize.Sequelize.Model;
  class Comic extends model {}
  Comic.init(
    {
      title: DataTypes.STRING,
      author: DataTypes.STRING,
      imageUrl: DataTypes.STRING
    },
    { sequelize }
  );
  Comic.associate = function(models) {
    // associations can be defined here
  };
  return Comic;
};
