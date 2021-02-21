const express = require("express");
const router = express.Router();
const OrdersController = require("../controllers/OrdersController");
const { isAuthenticated, hasRole } = require("../middlewares/authMiddleware");

const {
  validateFields,
  isMongoId,
  validateOrders,
} = require("../utils/validations");

router.get("/", OrdersController.getAllOrders);

router.get("/:id", [isMongoId, validateFields], OrdersController.getOrderById);

router.post(
  "/",
  [validateOrders, validateFields, isAuthenticated],
  OrdersController.createNewOrder
);

router.put(
  "/:id",
  [isMongoId, validateFields],
  isAuthenticated,
  OrdersController.updateOrder
);

router.delete(
  "/:id",
  [isMongoId, validateFields],
  isAuthenticated,
  OrdersController.deleteOrder
);

module.exports = router;
