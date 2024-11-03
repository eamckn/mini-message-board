const express = require("express");
const app = express();
const path = require("node:path");
const { messages } = require("./routes/index");
const PORT = 8080;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) =>
  res.render("index", { title: "Mini messageboard", messages: messages })
);

app.listen(PORT, () => {
  console.log(`Server is currently running on port ${PORT}.`);
});
