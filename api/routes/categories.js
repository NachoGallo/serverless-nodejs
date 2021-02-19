const express = require("express");
const router = express.Router();
const CategoriesController = require("../controllers/CategoriesController");
const { isAuthenticated } = require("../middlewares/authMiddleware");

router.get("/", CategoriesController.getAllCategories);

router.get("/:id", CategoriesController.getCategoryById);

router.post("/", isAuthenticated, CategoriesController.createNewCategory);

router.put("/:id", CategoriesController.updateCategory);

router.delete("/:id", CategoriesController.deleteCategory);

module.exports = router;
