module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    UserName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    UserPassword: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Height: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CurrentWeight: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    GoalWeight: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    DailyCalorieGain: {
      type: DataTypes.INTEGER,
    },
    DailyCalorieLost: {
      type: DataTypes.INTEGER,
    }
  });
  return User;
};

