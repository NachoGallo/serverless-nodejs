const Restaurants = require("../models/Restaurants");

exports.getAllRestaurants = async (req, res) => {
  const restaurants = await Restaurants.find();

  res.send(restaurants);
};

exports.getRestaurantById = async (req, res) => {
  const restaurant = await Restaurants.findById(req.params.id);
  if (!restaurant) return res.status(404).send();

  return res.status(200).send(restaurant);
};

exports.createNewRestaurant = async (req, res) => {
  const { _id } = req.user;

  const userHasOne = await this.checkUserHasOne(_id);
  if (userHasOne) throw new Error("El usuario ya tiene un restaurante creado.");

  Restaurants.create({ ...req.body, userId: _id }).then((restaurant) =>
    res.status(201).send(restaurant)
  );
};

exports.updateRestaurant = (req, res) => {
  Restaurants.findByIdAndUpdate(req.params.id, req.body).then(() =>
    res.sendStatus(204)
  );
};

exports.deleteRestaurant = async (req, res) => {
  const deleted = await Restaurants.findByIdAndDelete(req.params.id);

  if (!deleted) {
    const msg = "No se encontró el restaurante para eliminar.";
    res.status(404).send({ msg });
  }

  res.status(200).send(deleted);
};

exports.checkUserHasOne = async (_id) => {
  const restaurant = await Restaurants.find({ userId: _id });

  if (restaurant.length) return true;

  return false;
};
