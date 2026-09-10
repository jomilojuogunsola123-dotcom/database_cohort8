/**
const express = require("express");
const mongoose = require("mongoose");
const userRoute = require("./routes/userRoutes.js")
const compass_string = "mongodb://127.0.0.1:27017/Cohort8_db";

const atlas_string = "mongodb+srv://jomilojuogunsola123_db_user:Israel007@cluster0.dgzbq4f.mongodb.net/Cohort8_db?appName=Cluster0";

mongoose.connect(atlas_string)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("Connection error:", err));

const app = express();

const port = 8000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is Active");
});

app.use("/users", userRoute)
app.listen(port, () => {
  console.log(`Server is up and running on port: ${port}`);
});
*/

const express = require("express");
const mongoose = require("mongoose");

console.log("Loading user routes...");
const userRoute = require("./routes/userRoutes.js");
const productRoute = require("./routes/productRoutes.js");
console.log("userRoute:", userRoute);
console.log("Type of userRoute:", typeof userRoute);

// MongoDB Atlas connection
const atlas_string ="mongodb+srv://jomilojuogunsola123_db_user:Israel007@cluster0.dgzbq4f.mongodb.net/Cohort8_db?appName=Cluster0";

mongoose
  .connect(atlas_string)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("Connection error:", err));

const app = express();

const port = 8000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is Active");
});

app.use("/users", userRoute);
app.use("/products", productRoute)

app.listen(port, () => {
  console.log(`Server is up and running on port: ${port}`);
});