const express = require("express");
const router = express.Router();
const OrdersController = require("../controllers/OrdersController");
const { isAuthenticated, hasRole } = require("../middlewares/authMiddleware");

const { isMongoId, validateOrders } = require("../utils/validations");

router.get("/", OrdersController.getAllOrders);

router.get("/:id", isMongoId, OrdersController.getOrderById);

router.post(
  "/",
  [isAuthenticated, validateOrders],
  OrdersController.createNewOrder
);

router.put("/:id", [isMongoId, isAuthenticated], OrdersController.updateOrder);

router.delete(
  "/:id",
  [isMongoId, isAuthenticated, hasRole("ADMIN_ROLE")],
  OrdersController.deleteOrder
);

router.post(
  "/:id/delivered",
  [isMongoId, isAuthenticated, hasRole("USER_ROLE")],
  OrdersController.updateDelivered
);

module.exports = router;
