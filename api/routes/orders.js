const express = require("express");
const router = express.Router();
const Orders = require("../models/Orders");

router.get("/", (req, res) => {
  Orders.find()
    .exec()
    .then((Orders) => res.status(200).send(Orders));
});

router.get("/:id", (req, res) => {
  Orders.findById(req.params.id)
    .exec()
    .then((order) => res.status(200).send(order));
});

router.post("/", (req, res) => {
  Orders.create(req.body).then((order) => res.status(201).send(order));
});

router.put("/:id", (req, res) => {
  Orders.findByIdAndUpdate(req.params.id, req.body).then(() =>
    res.sendStatus(204)
  );
});

router.delete("/:id", (req, res) => {
  Orders.findByIdAndDelete(req.params.id)
    .exec()
    .then(() => res.sendStatus(204));
});

module.exports = router;
