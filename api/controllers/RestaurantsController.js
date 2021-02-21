const Restaurants = require("../models/Restaurants");

exports.getAllRestaurants = async (req, res) => {
  const restaurants = await Restaurants.find().exec();

  res.send(restaurants.toObject());
};

// exports.getCategoryById = async (req, res) => {
//   const category = await Restaurants.findById(req.params.id);

//   if (!category) return res.status(404).send();

//   return res.status(200).send(category);
// };

// exports.createNewCategory = (req, res) => {
//   const { _id } = req.user;
//   Restaurants.create({ ...req.body, user_id: _id }).then((category) =>
//     res.status(201).send(category)
//   );
// };

// exports.updateCategory = (req, res) => {
//   Restaurants.findByIdAndUpdate(req.params.id, req.body).then(() =>
//     res.sendStatus(204)
//   );
// };

// exports.deleteCategory = (req, res) => {
//   Restaurants.findByIdAndDelete(req.params.id)
//     .exec()
//     .then(() => res.sendStatus(204));
// };

// exports.checkExistCategory = async (categoryId) => {
//   const category = await Restaurants.findById(categoryId);
//   if (!category) throw new Error(`No existe categoria`);
// };
