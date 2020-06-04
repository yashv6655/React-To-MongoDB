const mongoose = require("mongoose");

var PostMessage = mongoose.model(
  "PostMessage",
  {
    title: { type: String },
    message: { type: String },
    username: { type: String },
    password: { type: String },
  },
  "testCollection"
);

module.exports = { PostMessage };