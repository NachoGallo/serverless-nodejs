const express = require("express");
const router = express.Router();
const MealsController = require("../controllers/MealsController");

const { isMongoId, validateMeals } = require("../utils/validations");

router.get("/", MealsController.getAllMeals);

router.get("/:id", isMongoId, MealsController.getMealById);

router.post("/", validateMeals, MealsController.createNewMeal);

router.put("/:id", isMongoId, MealsController.updateMeal);

router.delete("/:id", isMongoId, MealsController.deleteMeal);

module.exports = router;
