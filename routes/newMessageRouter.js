const { Router } = require("express");

const newMessageRouter = Router();

newMessageRouter.get("/", (req, res) => {
  res.render("newMessage");
});

module.exports = newMessageRouter;
