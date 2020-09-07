const mongoose = require("mongoose");

const PostsSchema = mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    price: {
      type: String,
      default: "0",
    },
    cardOwnerName: {
      type: String,
      require: true,
    },
    telephone: {
      type: String,
    },
    email: {
      type: String,
      require: true,
    },
    address: {
      type: String,
      default: "Stockholm",
    },
  },
  { timestamp: true }
);

const Posts = mongoose.model("Posts", PostsSchema);
module.exports = { Posts };
