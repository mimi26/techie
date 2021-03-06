'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING(32),
      unique: true
    },
    password: DataTypes.TEXT,
    email: DataTypes.STRING(128),
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    profile: DataTypes.STRING,
    description: DataTypes.STRING,
    skills: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return User;
};
