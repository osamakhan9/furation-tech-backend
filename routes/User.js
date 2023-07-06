const express = require("express");
const { registerControler, loginControler } = require("../controllers/userControler");

const authRouter = express.Router();

authRouter.post("/register",registerControler );
authRouter.post("/login", loginControler);

module.exports = authRouter;