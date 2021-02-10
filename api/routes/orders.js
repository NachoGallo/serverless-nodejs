const express = require("express");
const router = express.Router();
const OrderController = require("../controllers/OrderController");

router.get("/", OrderController.getAllOrders);

router.get("/:id", OrderController.getOrderById);

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
