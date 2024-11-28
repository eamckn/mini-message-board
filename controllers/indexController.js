const db = require("../db/queries");

const messagesDisplayGet = async function (req, res) {
  const messages = await db.getAllMessages();
  res.render("index", { title: "Mini messageboard", messages: messages });
};

const messagesDetailsGet = async function (req, res) {
  const { index } = req.params;
  //console.log(index);
  const queryData = await db.getMessageDetails(index);
  const message = queryData.rows[0];
  //console.log(message);
  res.render("message", { message: message });
};

module.exports = {
  messagesDisplayGet,
  messagesDetailsGet,
};
