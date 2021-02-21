const express = require("express");
const router = express.Router();
const MealsController = require("../controllers/MealsController");
const { isAuthenticated } = require("../middlewares/authMiddleware");

const { isMongoId, validateMeals } = require("../utils/validations");

router.get("/", MealsController.getAllMeals);

router.get("/:id", isMongoId, MealsController.getMealById);

router.post(
  "/",
  [isAuthenticated, validateMeals],
  MealsController.createNewMeal
);

router.put("/:id", [isAuthenticated, isMongoId], MealsController.updateMeal);

router.delete("/:id", [isAuthenticated, isMongoId], MealsController.deleteMeal);

module.exports = router;
