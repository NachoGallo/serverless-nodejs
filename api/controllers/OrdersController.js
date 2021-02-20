const Orders = require("../models/Orders");
const Meals = require("../models/Meals");

exports.getAllOrders = async (req, res) => {
  const orders = await Orders.find().populate("meals", "name").exec();
  const objOrders = JSON.parse(JSON.stringify(orders));

  res.send(objOrders);
};

exports.getOrderById = (req, res) => {
  Orders.findById(req.params.id)
    .populate("user", "name")
    .populate("meals", "name")
    .populate()
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
