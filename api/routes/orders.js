const express = require("express");
const router = express.Router();
const OrdersController = require("../controllers/OrdersController");

router.get("/", OrdersController.getAllOrders);

router.get("/:id", OrdersController.getOrderById);

router.post("/", OrdersController.createNewOrder);

router.put("/:id", OrdersController.updateOrder);

router.delete("/:id", OrdersController.deleteOrder);

module.exports = router;
