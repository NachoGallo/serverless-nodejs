const Orders = require("../models/Orders");

exports.getAllOrders = (req, res) => {
  Orders.find()
    .exec()
    .then((Orders) => res.status(200).send(Orders));
};

exports.getOrderById = (req, res) => {
  Orders.findById(req.params.id)
    .exec()
    .then((order) => res.status(200).send(order));
};

exports.createNewOrder = (req, res) => {
  Orders.create(req.body).then((order) => res.status(201).send(order));
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
