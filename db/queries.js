const pool = require("./pool");

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  console.log(rows);
  return rows;
}

async function getMessageDetails(id) {
  const { rows } = await pool.query("SELECT * FROM messages WHERE id = $1", [
    id,
  ]);
  //console.log(rows);
  return { rows };
}

async function addNewMessage(formData) {
  await pool.query(
    "INSERT INTO messages (author, text, added) VALUES ($1, $2, $3)",
    [formData.user, formData.text, formData.added]
  );
}

module.exports = {
  getAllMessages,
  getMessageDetails,
  addNewMessage,
};
