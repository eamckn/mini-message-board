const express = require("express");
const indexRouter = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
  {
    text: "Nice to meet you!",
    user: "Marcus",
    added: new Date(),
  },
];

indexRouter.get("/", (req, res) => {
  res.render("index", { title: "Mini messageboard", messages: messages });
});

indexRouter.get("/messages/:index", (req, res) => {
  const { index } = req.params;
  res.render("message", { message: messages[index - 1] });
});

module.exports = { messages, indexRouter };
