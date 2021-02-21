const express = require("express");
const router = express.Router();
const MealsController = require("../controllers/MealsController");

const {
  validateFields,
  isMongoId,
  validateMeals,
} = require("../utils/validations");

router.get("/", MealsController.getAllMeals);

router.get("/:id", [isMongoId, validateFields], MealsController.getMealById);

router.post(
  "/",
  [validateMeals, validateFields],
  MealsController.createNewMeal
);

router.put("/:id", [isMongoId, validateFields], MealsController.updateMeal);

router.delete("/:id", [isMongoId, validateFields], MealsController.deleteMeal);

module.exports = router;
