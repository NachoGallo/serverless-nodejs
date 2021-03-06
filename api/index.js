const express = require("express");

const mongoose = require("mongoose");
const cors = require("cors");
const meals = require("./routes/meals");
const orders = require("./routes/orders");
const restaurants = require("./routes/restaurants");
const categories = require("./routes/categories");
const auth = require("./routes/auth");
require("dotenv").config();
const port = process.env.PORT || 3001;
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

app.use("/api/meals", meals);
app.use("/api/orders", orders);
app.use("/api/categories", categories);
app.use("/api/auth", auth);
app.use("/api/restaurants", restaurants);

app.listen(port, () => {
  console.log(`Escuchando en el puerto ${port}`);
});

module.exports = app;
