const pool = require("./pool");

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

async function getMessage(messageId) {
  const { rows } = await pool.query("SELECT * FROM messages WHERE id = $1", [
    messageId,
  ]);
  return rows[0];
}

async function insertMessage(username, message) {
  await pool.query(
    "INSERT INTO messages (message, username, time_stamp) VALUES ($1, $2, current_timestamp)",
    [username, message]
  );
}

module.exports = {
  getAllMessages,
  getMessage,
  insertMessage,
};
