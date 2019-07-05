const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require("path");

const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");

const app = express();

// DB config
// Конфиг для монго ДБ
const db = require("./config/keys").mongoURI;

//Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Connect to Mongo
mongoose
  .connect(db)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// Passport Middleware
app.use(passport.initialize());

// Passport Config
require("./config/passport.js")(passport);

// Use Routes
app.use("/api/users/", users);
app.use("/api/profile/", profile);
app.use("/api/posts/", posts);

// Server static assets if in production
// Точка входа, если продакшн
if (process.env.NODE_ENV === "production") {
  // Set static folder
  // Указываем папку, в которой нужно искать
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log("Server running on port " + port));
