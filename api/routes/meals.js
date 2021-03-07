const express = require("express");
const router = express.Router();
const MealsController = require("../controllers/MealsController");
const { isAuthenticated, hasRole } = require("../middlewares/authMiddleware");

const { isMongoId, validateMeals } = require("../utils/validations");

router.get("/", MealsController.getAllMeals);

router.get("/:id", isMongoId, MealsController.getMealById);

router.post(
  "/",
  [isAuthenticated, hasRole("ADMIN_ROLE"), validateMeals],
  MealsController.createNewMeal
);

router.put(
  "/:id",
  [isAuthenticated, hasRole("ADMIN_ROLE"), isMongoId],
  MealsController.updateMeal
);

router.delete(
  "/:id",
  [isMongoId, isAuthenticated, hasRole("ADMIN_ROLE")],
  MealsController.deleteMeal
);

module.exports = router;
