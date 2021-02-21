const Categories = require("../models/Categories");

exports.getAllCategories = async (req, res) => {
  Categories.find()
    .exec()
    .then((categories) => res.send(categories));
};

exports.getCategoryById = async (req, res) => {
  const category = await Categories.findById(req.params.id);

  if (!category) return res.status(404).send();

  return res.status(200).send(category);
};

exports.createNewCategory = (req, res) => {
  const { _id } = req.user;
  Categories.create({ ...req.body, user_id: _id }).then((category) =>
    res.status(201).send(category)
  );
};

exports.updateCategory = (req, res) => {
  Categories.findByIdAndUpdate(req.params.id, req.body).then(() =>
    res.sendStatus(204)
  );
};

exports.deleteCategory = (req, res) => {
  Categories.findByIdAndDelete(req.params.id)
    .exec()
    .then(() => res.sendStatus(204));
};

exports.checkExistCategory = async (categoryId) => {
  const category = await Categories.findById(categoryId);
  if (!category) throw new Error(`No existe categoria`);
};
