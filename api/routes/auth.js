const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/AuthController");
const { isAuthenticated } = require("../middlewares/authMiddleware");
const { validateRegister, validateLogin } = require("../utils/validations");

router.post("/register", validateRegister, AuthController.register);
router.post("/login", validateLogin, AuthController.login);
router.get("/me", isAuthenticated, AuthController.getUserData);

module.exports = router;
