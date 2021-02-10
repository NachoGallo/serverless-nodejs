const Orders = require("../models/Orders");

export const getAllOrders = (req, res) => {
  Orders.find()
    .exec()
    .then((Orders) => res.status(200).send(Orders));
};

export const getOrderById = (req, res) => {
  Orders.findById(req.params.id)
    .exec()
    .then((order) => res.status(200).send(order));
};
