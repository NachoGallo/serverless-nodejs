const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const meals = require("./routes/meals");
const orders = require("./routes/orders");
require("dotenv").config();
const port = process.env.PORT || 3001;
const app = express();
app.use(bodyParser.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

app.use("/api/meals", meals);
app.use("/api/orders", orders);

app.listen(port, () => {
  console.log(`Escuchando en el puerto ${port}`);
});

module.exports = app;
