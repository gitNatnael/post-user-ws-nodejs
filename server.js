const express = require("express");
const app = express();
const connectDb = require("./db/connection");
const bodyParser = require("body-parser");
const usersRoute = require("./routes/User");
const postRoute = require("./routes/Post");

const port = process.env.PORT || 2525;
connectDb();
const cors = require("cors");
app.use(bodyParser.json());
app.use(cors());
app.use("/users", usersRoute);
app.use("/posts", postRoute);

app.get("/", function (req, res) {
  res.status(200).json({
    message: "working",
  });
});

app.listen(port, function () {
  console.log("running...");
});
// "start-build": "nodemon server.js",
