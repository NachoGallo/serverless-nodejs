const express = require("express");
const router = express.Router();
const CategoriesController = require("../controllers/CategoriesController");
const { isAuthenticated, hasRole } = require("../middlewares/authMiddleware");
const { isMongoId, validateCategory } = require("../utils/validations");
router.get("/", CategoriesController.getAllCategories);

router.get(
  "/:id",
  [isMongoId, isAuthenticated, hasRole("USER_ROLE")],
  CategoriesController.getCategoryById
);

router.post(
  "/",
  [validateCategory, isAuthenticated, hasRole("ADMIN_ROLE")],
  CategoriesController.createNewCategory
);

router.put(
  "/:id",
  [isMongoId, isAuthenticated, hasRole("ADMIN_ROLE")],
  CategoriesController.updateCategory
);

router.delete(
  "/:id",
  [isMongoId, isAuthenticated, hasRole("ADMIN_ROLE")],
  CategoriesController.deleteCategory
);

router.get(
  "/:id/meals",
  [isMongoId, isAuthenticated, hasRole("USER_ROLE")],
  CategoriesController.getMeals
);

module.exports = router;
