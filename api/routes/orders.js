const express = require("express");
const router = express.Router();
const OrdersController = require("../controllers/OrdersController");
const { isAuthenticated, hasRole } = require("../middlewares/authMiddleware");

const { isMongoId, validateOrders } = require("../utils/validations");

router.get("/", OrdersController.getAllOrders);

router.get("/:id", isMongoId, OrdersController.getOrderById);

router.post(
  "/",
  [validateOrders, isAuthenticated],
  OrdersController.createNewOrder
);

router.put("/:id", [isMongoId, isAuthenticated], OrdersController.updateOrder);

router.delete(
  "/:id",
  [isMongoId, isAuthenticated],
  OrdersController.deleteOrder
);

router.post(
  "/:id/delivered",
  [isMongoId, isAuthenticated],
  OrdersController.updateDelivered
);

module.exports = router;
