const Meals = require("../models/Meals");

exports.getAllMeals = (req, res) => {
  Meals.find()
    .exec()
    .then((meals) => res.status(200).send(meals));
};

exports.getMealById = (req, res) => {
  Meals.findById(req.params.id)
    .exec()
    .then((meal) => res.status(200).send(meal));
};

exports.createNewMeal = (req, res) => {
  Meals.create(req.body).then((meal) => res.status(201).send(meal));
};

exports.updateMeal = (req, res) => {
  Meals.findByIdAndUpdate(req.params.id, req.body).then(() =>
    res.sendStatus(204)
  );
};

exports.deleteMeal = (req, res) => {
  Meals.findByIdAndDelete(req.params.id)
    .exec()
    .then(() => res.sendStatus(204));
};
