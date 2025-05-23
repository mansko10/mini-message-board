// function generateString(length) {
//   const characters =
//     "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//   let result = " ";
//   const charactersLength = characters.length;
//   for (let i = 0; i < length; i++) {
//     result += characters.charAt(Math.floor(Math.random() * charactersLength));
//   }

//   return result;
// }

// const messages = [
//   {
//     text: "Hi there!",
//     user: "Amando",
//     id: generateString(5),
//     added: new Date(),
//   },
//   {
//     text: "Hello World!",
//     user: "Charles",
//     id: generateString(5),
//     added: new Date(),
//   },
// ];

const db = require("../db/queries");

async function getUsernames(req, res) {
  const messages = await db.getAllMessages();

  res.render("index", { messages });
}

async function getUsername(req, res) {
  const message = await db.getMessage(req.params.messageId);
  res.render("message", { message: message });
}

async function createMessageGet(req, res) {
  res.render("newMessage");
}

async function createMessagePost(req, res) {
  const { body } = req;

  await db.insertMessage(body.text, body.name);
  res.redirect("/messages");
}

module.exports = {
  getUsernames,
  getUsername,
  createMessageGet,
  createMessagePost,
};
