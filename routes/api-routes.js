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

  // api call that searches the database based on the exercise name. 
  app.get("/api/dashboard/exercise/findOne/:exercise", function(req, res) {
    if (req.params.exercise) {
      db.Exercise.findAll({
        where: {
          ExerciseName: req.params.exercise
        }
      }).then(function(cb) {
        res.json(cb);
      })
    }
  });
  // api call that searches the database based on the food name. 
  app.get("/api/dashboard/food/findOne/:food", function(req, res) {
    if (req.params.food) {
      db.Food.findAll({
        where: {
          FoodName: req.params.food
        }
      }).then(function(cb) {
        res.json(cb);
      })
    }
  });

    // api call that searches the database based on user name. 
  app.get("/api/dashboard/user/findOne/:name", function(req, res) {
    if (req.params.user) {
      db.Users.findAll({
        where: {
          UserName: req.params.user
        }
      }).then(function(cb) {
        res.json(cb);
      })
    }
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
     db.Users.findAll({}).then(function(cb) {
      res.json(cb);
     })
  });

  // // POST route for saving a new exercise.
  app.post("/api/dashboard/exercise/postExercise", function(req, res) { 
    console.log("post exercise is working");
   db.Exercise.create({
      ExerciseName: req.body.ExerciseName,
      ExerciseDescription: req.body.ExerciseDescription,
      ExerciseCaloriesLost: req.body.ExerciseCalorieslost
    }).then(function(cb) {
      res.json(cb);
    });
  });

  //  // POST route for saving a new food.
  app.post("/api/dashboard/food/postFood", function(req, res) {
  console.log("post food is working");
   db.Food.create({
      FoodName: req.body.FoodName,
      FoodDescription: req.body.FoodDescription,
      FoodCalorieGain: req.body.FoodCalorieGain
    }).then(function(cb) {
      res.json(cb);
    });
  });

  app.post("/api/dashboard/food/calories", function(req, res) {
  console.log("post food is working");
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
   db.Users.create({
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

  app.post("/api/dashboard/user/caloriesIn/:calories", function(req, res) {
    db.Users.update({
      DailyCalorieGain: req.body.DailyCalorieGain 
      },{
        where: {UserName: currentUser}
    }).then(function(cb) {
      console.log("update works!");
      res.json(cb);
    });
  });


  // app.post("/api/dashboard/user/postUser", function(req, res) { 
  //  db.Users.create({
  //     UserName: "Chris",
  //     UserPassword: "hgtr",
  //     Height: 44,
  //     CurrentWeight: 157,
  //     GoalWeight: 150,
  //     DailyCalorieGain: 0,
  //     DailyCalorieLost: 0
  //   }).then(function(cb) {
  //     console.log(cb);
  //   });
  // });

};

