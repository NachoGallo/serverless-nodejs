const express = require("express");
const router = express.Router();
const RestaurantsController = require("../controllers/RestaurantsController");
const { isAuthenticated } = require("../middlewares/authMiddleware");
// const {
//   validateFields,
//   isMongoId,
//   validateCategory,
// } = require("../utils/validations");

router.get("/", RestaurantsController.getAllRestaurants);

// router.get("/:id", RestaurantsController.getRestaurantById);

// router.post("/", isAuthenticated, RestaurantsController.createNewRestaurant);

// router.put("/:id", RestaurantsController.updateRestaurant);

// router.delete("/:id", RestaurantsController.deleteRestaurant);

module.exports = router;
