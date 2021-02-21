const express = require("express");
const router = express.Router();
const CategoriesController = require("../controllers/CategoriesController");
const { isAuthenticated } = require("../middlewares/authMiddleware");
const {
  validateFields,
  isMongoId,
  validateCategory,
} = require("../utils/validations");
router.get("/", CategoriesController.getAllCategories);

router.get(
  "/:id",
  [isMongoId, validateFields],
  CategoriesController.getCategoryById
);

router.post(
  "/",
  [validateCategory, validateFields],
  isAuthenticated,
  CategoriesController.createNewCategory
);

router.put(
  "/:id",
  [isMongoId, validateFields],
  CategoriesController.updateCategory
);

router.delete(
  "/:id",
  [isMongoId, validateFields],
  CategoriesController.deleteCategory
);

module.exports = router;
