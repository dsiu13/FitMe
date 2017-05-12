module.exports = function(sequelize, DataTypes) {
  var Exercise = sequelize.define("Exercise", {
    ExerciseName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ExerciseDescription: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ExerciseCaloriesLost: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  });
  return Exercise;
};