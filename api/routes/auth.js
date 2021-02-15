const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/AuthController");
const { isAuthenticated } = require("../middlewares/authMiddleware");

router.post("/register", AuthController.register);
router.post("/login", AuthController.login);
router.get("/me", isAuthenticated, AuthController.getUserData);

module.exports = router;
