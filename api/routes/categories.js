const express = require("express");
const router = express.Router();
const CategoriesController = require("../controllers/CategoriesController");
const { isAuthenticated } = require("../middlewares/authMiddleware");
const { isMongoId, validateCategory } = require("../utils/validations");
router.get("/", CategoriesController.getAllCategories);

router.get("/:id", isMongoId, CategoriesController.getCategoryById);

router.post(
  "/",
  [validateCategory, isAuthenticated],
  CategoriesController.createNewCategory
);

router.put(
  "/:id",
  [isAuthenticated, isMongoId],
  CategoriesController.updateCategory
);

router.delete(
  "/:id",
  [isAuthenticated, isMongoId],
  CategoriesController.deleteCategory
);

router.get(
  "/:id/meals",
  [isAuthenticated, isMongoId],
  CategoriesController.getMeals
);

module.exports = router;
