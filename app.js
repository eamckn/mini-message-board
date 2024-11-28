require("dotenv").config();
const express = require("express");
const app = express();
const path = require("node:path");
const { indexRouter } = require("./routes/index");
const { newMessageRouter } = require("./routes/new");
const PORT = 8080;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);
app.use("/new", newMessageRouter);

app.listen(PORT, () => {
  console.log(`Server is currently running on port ${PORT}.`);
});

/*

For open button
- Create index router
- Use index of array as req.param,
- Res.render message, pass in user from array

*/
