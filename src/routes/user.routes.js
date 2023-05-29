const { Router } = require("express");

const UsersController = require("../controllers/UsersController");

const ensureAuthenticaded = require("../middlewares/ensureAuthenticaded");

const userRoutes = Router();


const usersController = new UsersController();

userRoutes.post("/", usersController.create);
userRoutes.put("/", ensureAuthenticaded, usersController.update);

module.exports = userRoutes;