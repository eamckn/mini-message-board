const express = require("express");
const app = express();
const path = require("node:path");
const { messages } = require("./routes/index");
const { newMessageRouter } = require("./routes/new");
const PORT = 8080;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) =>
  res.render("index", { title: "Mini messageboard", messages: messages })
);

app.use("/new", newMessageRouter);

app.listen(PORT, () => {
  console.log(`Server is currently running on port ${PORT}.`);
});
