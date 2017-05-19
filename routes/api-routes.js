// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models

var authController = require('../controllers/authcontroller.js');
var passport = require('passport');
var db = require("../models");
// var sequelizeHandlers = require('sequelize-handlers');

// Routes
// =============================================================
module.exports = function(app) {

  console.log('working!');

  //api call that searched the database based on the exercise name.  
  app.get("/api/dashboard/exercise/findOne/:exercise", function(req, res) {
    db.Exercise.findOne({
      where: {
        ExerciseName: req.params.ExerciseName
      }
    }).then(function(cb) {
      res.json(cb);
    });
  });

  // api call that searches the database based on the food name. 
  app.get("/api/dashboard/food/findOne/:food", function(req, res) {
    db.Food.findOne({
      where: {
        FoodName: req.params.FoodName
      }
    }).then(function(cb) {
      res.json(cb);
    });
  });

  // api call that searches the database based on user name. 
  app.get("/api/dashboard/user/findOne/:name", function(req, res) {
    db.Users.findOne({
      where: {
        UserName: req.params.UserName
      }
    }).then(function(cb) {
      res.json(cb);
    });
  });

  // api call that searches the food database and returns all foods. 
  app.get("/api/dashboard/food/foodall", function(req, res) {
     db.Food.findAll({}).then(function(cb) {
      console.log('food get all is working');
      res.json(cb);
     })
  });

  // api call that searched the exercise database and returns exercises. 
  app.get("/api/dashboard/exercise/exerciseall", function(req, res) {
     db.Exercise.findAll({}).then(function(cb) {
      console.log("exercise all is working");
      res.json(cb);
     })
  });

  // api call that searches the database and returns all users. 
  app.get("/api/dashboard/user/userall", function(req, res) {
     db.User.findAll({}).then(function(cb) {
      res.json(cb);
     })
  });

  // POST route for saving a new exercise.
  app.post("/api/dashboard/exercise/postExercise", function(req, res) { 
   db.Exercise.create({
      ExerciseName: req.body.ExerciseName,
      ExerciseDescription: req.body.ExerciseDescription,
      ExerciseCaloriesLost: req.body.ExerciseCalorieslost
    }).then(function(cb) {
      res.json(cb);
    });
  });

   // POST route for saving a new food.
  app.post("/api/dashboard/food/postFood", function(req, res) { 
   db.Food.create({
      FoodName: req.body.FoodName,
      FoodDescription: req.body.FoodDescription,
      FoodCalorieGain: req.body.FoodCalorieGain
    }).then(function(cb) {
      res.json(cb);
    });
  });

  // POST route for saving a new user.
  app.post("/api/dashboard/user/postUser", function(req, res) { 
   db.User.create({
      UserName: req.body.UserName,
      UserPassword: req.body.UserPassword,
      Height: req.body.Height,
      CurrentWeight: req.body.CurrentWeight,
      GoalWeight: req.body.GoalWeight,
      DailyCalorieGain: req.body.DailyCalorieGain,
      DailyCalorieLost: req.body.DailyCalorieLost
    }).then(function(cb) {
      res.json(cb);
    });
  });

};

