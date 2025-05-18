function generateString(length) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = " ";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    id: generateString(5),
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    id: generateString(5),
    added: new Date(),
  },
];

async function getUsernames(req, res) {
  res.render("index", { messages });
}

async function getUsername(req, res) {
  const message = messages.find(
    (message) => message.id === req.params.messageId
  );
  res.render("message", { message: message });
}

async function createMessageGet(req, res) {
  res.render("newMessage");
}

async function createMessagePost(req, res) {
  const { body } = req;
  const newMessage = {
    text: body.text,
    user: body.name,
    id: generateString(5),
    added: new Date(),
  };
  messages.push(newMessage);
  res.redirect("/messages");
}

module.exports = {
  getUsernames,
  getUsername,
  createMessageGet,
  createMessagePost,
};
