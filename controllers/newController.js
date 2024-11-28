const db = require("../db/queries");

const newMessagePost = async function (req, res) {
  const formData = {
    text: req.body.message,
    user: req.body.name,
    added: new Date(),
  };
  await db.addNewMessage(formData);
  res.redirect("/");
};

module.exports = { newMessagePost };
