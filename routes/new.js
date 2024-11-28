const { Router } = require("express");
const newMessageRouter = Router();
const newController = require("../controllers/newController");

newMessageRouter.get("/", (req, res) => res.render("form"));

newMessageRouter.post("/", newController.newMessagePost);

module.exports = { newMessageRouter };
