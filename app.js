const express = require("express");
const path = require("node:path");

const app = express();
const assetsPath = path.join(__dirname, "public");

app.use(express.static(assetsPath));
app.use(express.urlencoded({ extended: true }));

// Router imports
const usersRouter = require("./routes/usersRouter");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", usersRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log("App is running");
});
