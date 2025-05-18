const { Router } = require("express");

const usersRouter = Router();
const usersController = require("../controllers/usersController");

usersRouter.get("/", (req, res) => {
  res.redirect("/messages");
});

usersRouter.get("/messages", usersController.getUsernames);
usersRouter.get("/new", usersController.createMessageGet);
usersRouter.get("/messages/:messageId", usersController.getUsername);
usersRouter.post("/messages/postmessage", usersController.createMessagePost);

module.exports = usersRouter;
