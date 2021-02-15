const Orders = require("../models/Orders");
const Meals = require("../models/Meals");

exports.getAllOrders = async (req, res) => {
  const orders = await Orders.find().exec();
  const objOrders = JSON.parse(JSON.stringify(orders));
  const mealsNames = await Meals.find({}, { name: 1 }).exec();

  objOrders.forEach((order, i) => {
    order.mealName = mealsNames
      .filter((mealName) => mealName._id == order.mealId)
      .map((mealName) => mealName.name)[0];
  });

  res.send(objOrders);
};

exports.getOrderById = (req, res) => {
  Orders.findById(req.params.id)
    .exec()
    .then((order) => res.status(200).send(order));
};

exports.createNewOrder = (req, res) => {
  const { _id } = req.user;
  Orders.create({ ...req.body, user_id: _id }).then((order) =>
    res.status(201).send(order)
  );
};

exports.updateOrder = (req, res) => {
  Orders.findByIdAndUpdate(req.params.id, req.body).then(() =>
    res.sendStatus(204)
  );
};

exports.deleteOrder = (req, res) => {
  Orders.findByIdAndDelete(req.params.id)
    .exec()
    .then(() => res.sendStatus(204));
};
