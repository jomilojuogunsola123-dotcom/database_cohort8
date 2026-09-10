/*
const express = require("express")

const userRoute = express.Router()
const {createUser, deleteUser, updateUser, getSingleUser, getAllUsers} = require("../controller/userController")

userRoute.post("/new-user", createUser)
userRoute.get("/all-user", getAllUsers)
userRoute.get("/get-one-user/:id", getSingleUser)
userRoute.delete("/delet-user/:userId", deleteUser)
userRoute.patch("/update-user/:id", updateUser)

module.exports = userRoute
*/

const express = require("express");

console.log("1. userRoutes.js is loading");

const userRoute = express.Router();

console.log("2. Router created:", typeof userRoute);

const {
  createUser,
  deleteUser,
  updateUser,
  getSingleUser,
  getAllUsers,
} = require("../controller/userController");

console.log("3. Controllers loaded:");
console.log({
  createUser: typeof createUser,
  deleteUser: typeof deleteUser,
  updateUser: typeof updateUser,
  getSingleUser: typeof getSingleUser,
  getAllUsers: typeof getAllUsers,
});

userRoute.post("/new-user", createUser);

userRoute.get("/all-user", getAllUsers);

userRoute.get("/get-one-user/:id", getSingleUser);

userRoute.delete("/delete-user/:userId", deleteUser);

userRoute.patch("/update-user/:id", updateUser);

console.log("4. Exporting router:", typeof userRoute);

module.exports = userRoute;