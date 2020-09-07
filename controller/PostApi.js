const Post = require("../models/Posts");

const newPost = (req, res, next) => {
  try {
    let post = new Post.Posts({
      title: req.body.title,
      description: req.body.description,
      cardOwnerName: req.body.cardOwnerName,
      telephone: req.body.telephone,
      address: req.body.address,
      price: req.body.price,
      email: req.body.email,
    });
    console.log("test", post);
    post.save().then(() => {
      res.json({
        post,
      });
    });
  } catch (error) {
    res.json({
      error: error.message,
    });
  }
};
const allposts = (req, res, next) => {
  Post.Posts.find()
    .then((response) => {
      if (response) {
        res.json({
          response,
        });
      } else {
        res.json({ message: "no post found" });
      }
    })
    .catch((err) => {
      res.json({ message: err.message });
    });
};
module.exports = {
  newPost,
  allposts,
};
