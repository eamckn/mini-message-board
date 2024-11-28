const express = require("express");
const indexRouter = express.Router();
const indexController = require("../controllers/indexController");

indexRouter.get("/", indexController.messagesDisplayGet);

indexRouter.get("/messages/:index", indexController.messagesDetailsGet);

module.exports = { indexRouter };
