const express = require("express");
const router = express.Router();
const MealsController = require("../controllers/MealsController");

router.get("/", MealsController.getAllMeals);

router.get("/:id", MealsController.getMealById);

router.post("/", MealsController.createNewMeal);

router.put("/:id", MealsController.updateMeal);

router.delete("/:id", MealsController.deleteMeal);

module.exports = router;
