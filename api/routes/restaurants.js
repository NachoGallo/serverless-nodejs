const express = require("express");
const router = express.Router();
const RestaurantsController = require("../controllers/RestaurantsController");
const { isAuthenticated } = require("../middlewares/authMiddleware");
const { validateRestaurants, isMongoId } = require("../utils/validations");

router.get("/", RestaurantsController.getAllRestaurants);

router.get("/:id", isMongoId, RestaurantsController.getRestaurantById);

router.post(
  "/",
  [isAuthenticated, validateRestaurants],
  RestaurantsController.createNewRestaurant
);

router.put(
  "/:id",
  [isAuthenticated, isMongoId],
  RestaurantsController.updateRestaurant
);

router.delete(
  "/:id",
  [isAuthenticated, isMongoId],
  RestaurantsController.deleteRestaurant
);

module.exports = router;
