const express = require("express");
const router = express.Router();
const OrdersController = require("../controllers/OrdersController");
const { isAuthenticated, hasRole } = require("../middlewares/authMiddleware");

router.get("/", OrdersController.getAllOrders);

router.get("/:id", OrdersController.getOrderById);

router.post("/", isAuthenticated, OrdersController.createNewOrder);

router.put("/:id", isAuthenticated, OrdersController.updateOrder);

router.delete("/:id", isAuthenticated, OrdersController.deleteOrder);

module.exports = router;
