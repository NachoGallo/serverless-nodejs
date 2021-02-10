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
