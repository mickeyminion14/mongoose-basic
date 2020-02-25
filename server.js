const express = require("express");

const todo = require("./routes/todo/todo");
const account = require("./routes/account/account");
const app = express();
const cors = require("cors");

const mongoose = require("mongoose");
const PORT = process.env.PORT || 8080;

const url = "mongodb://minion:12345minion@ds157964.mlab.com:57964/todominion";

app.use(express.json());

app.use(cors());

app.use("/account", account);
app.use("/todo", todo);

app.use((req, res) => {
  res.statusCode = 400;
  res.json({
    message: "Page Not Found !!",
    result: {
      data: null
    }
  });
});

mongoose.connect(
  url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  },
  () => {
    app.listen(PORT, () => {
      console.log("server running on port " + PORT);
    });
  }
);