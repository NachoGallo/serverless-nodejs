const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/AuthController");
const { isAuthenticated } = require("../middlewares/authMiddleware");
const {
  validateRegister,
  validateFields,
  validateLogin,
} = require("../utils/validations");

router.post(
  "/register",
  [validateRegister, validateFields],
  AuthController.register
);
router.post("/login", [validateLogin, validateFields], AuthController.login);
router.get("/me", isAuthenticated, AuthController.getUserData);

module.exports = router;
