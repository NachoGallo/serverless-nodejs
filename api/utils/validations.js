const { check, validationResult } = require("express-validator");
const AuthController = require("../controllers/AuthController");
const CategoriesController = require("../controllers/CategoriesController");

const getErrorsFromChecks = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json(errors);
  }

  next();
};

const isMongoId = [
  check("id", "No es un ID válido").isMongoId(),
  getErrorsFromChecks,
];

//USER
const validateRegister = [
  check("name", "El nombre es obligatorio").not().isEmpty(),
  check("password", "El password debe de ser más de 6 letras").not().isEmpty(),
  check("email", "El correo no es válido").isEmail(),
  check("email").custom(AuthController.checkExistEmail),
  getErrorsFromChecks,
];

const validateLogin = [
  check("password", "Falta password").not().isEmpty(),
  check("email", "Falta email").isEmail(),
  getErrorsFromChecks,
];

//CATEGORY
const validateCategory = [
  check("name", "El nombre es obligatorio").not().isEmpty(),
  getErrorsFromChecks,
];

//MEALS
const validateMeals = [
  check("name", "El nombre es obligatorio").not().isEmpty(),
  check("price", "El precio es obligatorio").not().isEmpty().isNumeric(),
  check("category", "La categoria es obligatoria").not().isEmpty().isMongoId(),
  check("category").custom(CategoriesController.checkExistCategory),
  getErrorsFromChecks,
];

//ORDERS

// meals isMongoId, exist
// restourant mongoid , ecist

//RESTAURANTS

// const validateRestaurants = []

const validateOrders = [
  check("price", "Precio invalido").not().isEmpty().isNumeric(),
  check("user", "Usuario invalido").not().isEmpty().isMongoId(),
  check("meals", "Ingrese platos").not().isEmpty(),
  getErrorsFromChecks,
];

module.exports = {
  validateRegister,
  getErrorsFromChecks,
  validateLogin,
  isMongoId,
  validateCategory,
  validateMeals,
  validateOrders,
};
