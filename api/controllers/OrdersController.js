const Orders = require("../models/Orders");
const Meals = require("../models/Meals");

exports.getAllOrders = async (req, res) => {
  const orders = await Orders.find()
    .populate("user", "name email")
    .populate({
      path: "meals",
      select: "name",
      populate: { path: "category", select: "name" },
    })
    .populate("count_meals");
  res.send(orders);
};

exports.getOrderById = (req, res) => {
  Orders.findById(req.params.id)
    .populate("user", "name")
    .populate({
      path: "meals",
      select: "name",
      populate: { path: "category", select: "name" },
    })
    .then((order) => res.status(200).send(order));
};

exports.createNewOrder = (req, res) => {
  const { _id } = req.user;

  Orders.create({ ...req.body, user: _id }).then((order) =>
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

exports.updateDelivered = async (req, res) => {
  const id = req.params.id;
  const isUpdated = await Orders.findByIdAndUpdate(id, {
    delivered: req.body.delivered,
  });

  res.status(200).send(isUpdated);
};
